#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SampleApp } from '../lib/sample-app';
import { PipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();

const delivery = new PipelineStack(app, 'sample-DeliveryPipeline', {
  name: 'sample-app',
  env: {
    account: '282334958158',
    region: 'eu-west-1',
  }
});

delivery.pipeline.addApplicationStage(
  new SampleApp(app, 'devSampleApp', { 
    env: {
      account: '722610601746',
      region: 'eu-west-1'
    }
  })
);

delivery.pipeline.addApplicationStage(
  new SampleApp(app, 'preSampleApp', {
    env: {
      account: '807034265755',
      region: 'eu-west-1'
    }
  })
);
