import { fox } from 'fetchfox';

const key = process.env.OPENROUTER_API_KEY;

const wf = await fox
  .config({
    // diskCache: 'ff-cache',
    ai: [
      'openai:gpt-4o-mini',
      {
        apiKey: key,
        baseURL: 'https://openrouter.ai/api/v1',
      }
    ]
  })
  .init(
    'https://pokemondb.net/pokedex/national',
  )
  .extract({
    name: 'Pokemon name, starting with the first pokemon',
    number: 'Pokemon number, format: #XXXX',
  })
  .limit(3);

const results = await wf.run(null, (delta) => {});

console.log('results', results);
