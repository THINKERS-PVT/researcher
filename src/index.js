import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { ulid } from 'ulid';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3030;

const app = express();
app.set('view engine', 'ejs');
app.set('views', join(__dirname, '../views'));
const landingEjsPath = join(__dirname, '../views/landingpage.ejs');
app.use(express.static(join(__dirname, '../public')));

function gener(req, res) {
  const ulId = ulid();
  const uuidValue = uuidv4();
  const nanoidValue = nanoid();

  let ids = {
    ulid: ulId,
    uuid: uuidValue,
    nanoid: nanoidValue
  };

  res.send(ids);
}

app.all('/id', gener);

app.all('*', (req, res) => {
  res.render(landingEjsPath);
});

app.listen(port, () => {
  console.log(`Server started on localhost:${port}`);
});
