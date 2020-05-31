import app from './app';
const PORT = process.env.PORT|| 9000;

app.listen(PORT, (): void => {
  // tslint:disable-next-line: no-console
  console.log('Express server listening on port ' + PORT);
});
