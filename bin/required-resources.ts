#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RequiredResourcesStack } from '../lib/required-resources';

const dev = { account: '722610601746', region: 'eu-west-1' }
const pre = { account: '807034265755', region: 'eu-west-1' }
const trustedAccount = '282334958158';

const app = new cdk.App();

new RequiredResourcesStack(app, 'dev', {
  env: dev,
  trustedAccount
});

new RequiredResourcesStack(app, 'pre', {
  env: pre,
  trustedAccount
});
