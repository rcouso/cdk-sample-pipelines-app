import * as cdk from '@aws-cdk/core';
import * as ssm from '@aws-cdk/aws-ssm';

export class SampleApp extends cdk.Stage {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    const stack = new cdk.Stack(this, 'SampleStack', {
      env: props?.env,
    });

    // just doing a simple ssm parameter lookup to have the CDK read from the account
    var param = ssm.StringParameter.valueFromLookup(stack, '/aws/service/ecs/optimized-ami/amazon-linux/recommended')
    param = param + " MODIFICADO "
    new cdk.CfnOutput(stack, 'Param', {
      value: param
    });
  }
}
