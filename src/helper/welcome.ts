import chalkAnimation from "chalk-animation";

const sleep = (ms = 3000) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

const welcome = async (param: string) => {
  const welcomeScreen = chalkAnimation.neon(param);


  await sleep();
  welcomeScreen.stop();
};

export default welcome;