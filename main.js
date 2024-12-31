import { fox } from 'fetchfox';

const wf = await fox
  .config({
    // diskCache: 'ff-cache',
    ai: 'openrouter:anthropic/claude-3.5-sonnet',
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
