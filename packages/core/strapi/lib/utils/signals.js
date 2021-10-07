'use strict';

const destroyOnSignal = () => {
  const terminateStrapi = async () => {
    // console.log({ args });
    // console.log('uid', process.getuid());
    // await strapi.destroy();
    // setTimeout(() => {
    // process.exit();
    // }, 5000)
  };

  process.on('SIGTERM', () => {
    console.log('SIGTERM');
    return terminateStrapi();
  });
  process.on('SIGINT', () => {
    // console.log('SIGINT');
    process.stdout.write('\nSIGINT');
    return terminateStrapi();
  });
  // process.on('SIGINT', terminateStrapi);
};

module.exports = {
  destroyOnSignal,
};
