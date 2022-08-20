
import masjid from './extensions/assets/images/masjid.jpg'
import plugins from './extensions/plugins-dev';


const config = {
    locales: ['fa'],
    auth: {
      logo: masjid
    },
    head: {
      favicon: masjid
    },
    menu: {
      logo: masjid
    },
    tutorials: false,
    notifications: {
      releases: false
    }
  };
  
  const bootstrap = app => {
    console.log(app);
  };
  
  export default {
    config,
    bootstrap,
  };
  