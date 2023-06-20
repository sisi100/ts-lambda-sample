import * as cdk from "aws-cdk-lib";

const app = new cdk.App();
const stack = new cdk.Stack(app, "ts-lambda-sample-stack");

new cdk.aws_lambda_nodejs.NodejsFunction(stack, "function", {
  entry: "src/assets/index.ts",
  handler: "handler",
  architecture: cdk.aws_lambda.Architecture.ARM_64,
  runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
  timeout: cdk.Duration.seconds(10),
});

app.synth();
