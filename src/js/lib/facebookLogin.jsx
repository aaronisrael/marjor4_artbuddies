import React from 'react';
import PropTypes from 'prop-types';
import objectToParams from './objectToParams';

const getIsMobile = () => {
  let isMobile = false;

  try {
    isMobile = !!((window.navigator && window.navigator.standalone) || navigator.userAgent.match(`CriOS`) || navigator.userAgent.match(/mobile/i));
  } catch (ex) {
    console.log(ex);
  }

  return isMobile;
};

class FacebookLogin extends React.Component {

  static propTypes = {
    isDisabled: PropTypes.bool,
    callback: PropTypes.func.isRequired,
    appId: PropTypes.string.isRequired,
    xfbml: PropTypes.bool,
    cookie: PropTypes.bool,
    reAuthenticate: PropTypes.bool,
    scope: PropTypes.string,
    redirectUri: PropTypes.string,
    disableMobileRedirect: PropTypes.bool,
    isMobile: PropTypes.bool,
    fields: PropTypes.string,
    version: PropTypes.string,
    language: PropTypes.string,
    handleOnClick: PropTypes.func,
  };

  static defaultProps = {
    isDisabled: false,
    textButton: `Login with Facebook`,
    typeButton: `button`,
    redirectUri: typeof window !== `undefined` ? window.location.href : `/`,
    scope: `public_profile, user_friends, `,
    xfbml: false,
    cookie: false,
    reAuthenticate: false,
    size: `metro`,
    fields: `name`,
    version: `2.3`,
    language: `en_US`,
    disableMobileRedirect: false,
    isMobile: getIsMobile(),
    tag: `button`,
    icon: `test`,
    handleOnClick: PropTypes.defaultProps,
    containerStyle: PropTypes.defaultProps,
  };

  state = {
    isSdkLoaded: false,
    isProcessing: false,
  };

  componentDidMount() {
    this._isMounted = true;
    if (document.getElementById(`facebook-jssdk`)) {
      this.sdkLoaded();
      return;
    }
    this.setFbAsyncInit();
    this.loadSdkAsynchronously();
    let fbRoot = document.getElementById(`fb-root`);
    if (!fbRoot) {
      fbRoot = document.createElement(`div`);
      fbRoot.id = `fb-root`;
      document.body.appendChild(fbRoot);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setStateIfMounted(state) {
    if (this._isMounted) {
      this.setState(state);
    }
  }

  setFbAsyncInit() {
    const {appId, xfbml, cookie, version} = this.props;
    window.fbAsyncInit = () => {
      window.FB.init({
        version: `v${version}`,
        appId,
        xfbml,
        cookie,
      });
      this.setStateIfMounted({isSdkLoaded: true});
    };
  }

  sdkLoaded() {
    this.setState({isSdkLoaded: true});
  }

  loadSdkAsynchronously() {
    const {language} = this.props;
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) { return; }
      js = d.createElement(s);js.id = id;
      js.src = `//connect.facebook.net/${language}/all.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, `script`, `facebook-jssdk`);
  }

  responseApi = authResponse => {
    window.FB.api(`/me`, {locale: this.props.language, fields: this.props.fields}, me => {
      Object.assign(me, authResponse);
      this.props.callback(me);
    });
  };

  checkLoginState = response => {
    this.setStateIfMounted({isProcessing: false});
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else {
      if (this.props.callback) {
        this.props.callback({status: response.status});
      }
    }
  };

  checkLoginAfterRefresh = response => {
    if (response.status === `connected`) {
      this.checkLoginState(response);
    } else {
      window.FB.login(loginResponse => this.checkLoginState(loginResponse), true);
    }
  };

  handleOnClick = e => {
    if (!this.state.isSdkLoaded || this.state.isProcessing || this.props.isDisabled) {
      return;
    }
    this.setState({isProcessing: true});
    const {scope, appId, handleOnClick, reAuthenticate, redirectUri, disableMobileRedirect} = this.props;

    if (typeof handleOnClick === `function`) {
      handleOnClick(e);
      if (e.defaultPrevented) {
        return;
      }
    }

    const params = {
      clientId: appId,
      redirectUri: redirectUri,
      state: `facebookdirect`,
      scope,
    };

    if (reAuthenticate) {
      params.authType = `reauthenticate`;
    }

    if (this.props.isMobile && !disableMobileRedirect) {
      window.location.href = `//www.facebook.com/dialog/oauth?${objectToParams(params)}`;
    } else {
      window.FB.login(this.checkLoginState, {scope, authType: params.auth_type});
    }
  };

  render() {
    return (
      <span>
        <button className='fbbutton'
          onClick={this.handleOnClick}
        >
          <div className='fblogo'></div> Log in met facebook
        </button>
      </span>
    );
  }
}

export default FacebookLogin;
