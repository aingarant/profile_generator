const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answers = {};

const questions = [
  {
    id: 1,
    q: "What's your name? Nicknames are also acceptable :)"
  },
  {
    id: 2,
    q: "What's an activity you like doing?"
  },
  {
    id: 3,
    q: "What do you listen to while doing that?"
  },
  {
    id: 4,
    q: "Which meal is your favourite (eg: dinner, brunch, etc.)"
  },
  {
    id: 5,
    q: "What's your favourite thing to eat for that meal?"
  },
  {
    id: 6,
    q: "Which sport is your absolute favourite?"
  },
  {
    id: 7,
    q: "What is your superpower? In a few words, tell us what you are },amazing at!",
  },
];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  answers['1'] = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    answers['2'] = answer;

    rl.question("What do you listen to while doing that? ", (answer) => {
      answers['3'] = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        answers['4'] = answer;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answers['5'] = answer;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answers['6'] = answer;

            rl.question("What is your superpower? In a few words, tell us what you are },amazing at! ", (answer) => {
              answers['7'] = answer;

              rl.close();
              console.log(`Your name is: ${answers['1']}. You like to ${answers['2']}. You listen to ${answers['3']} while ${answers['2']}. You like to ${answers['5']} when eating your ${answers['4']}. Your absolute favourite sport is ${answers['6']}, and your super power is ${answers['7']}`);
            });
          });
        });
      });
    });
  });
});