import { composePlugins, withNx } from '@nx/next';

/** @type {import('@nx/next/plugins/with-nx').WithNxOptions} */
const nextConfig = {
  nx: {},
};

export default composePlugins(withNx)(nextConfig);
