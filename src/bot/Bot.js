const Matt = {
  id: '1',
  name: 'Matt',
  answers: {
    "hola": 'Hola amigo! Me llamo Matt',
    "fajitas": "Me gutsta los fajitas",
    "adios":"adios",
    "error":"no entiendo"
  }
};

export const BotMatt = (messageToAnswer) => {
  console.log(messageToAnswer);
  if (Matt.answers[messageToAnswer]) console.log(Matt.answers[messageToAnswer]);
  return Matt.answers[messageToAnswer] ? Matt.answers[messageToAnswer] : Matt.answers.error;
}