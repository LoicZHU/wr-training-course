import * as mongoose from 'mongoose';

export function connect(url = process.env.DATABASE_HOST) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Connexion à MongoDB : OK.'))
    .catch(() => console.log('Connexion à MongoDB : KO...'))
}
