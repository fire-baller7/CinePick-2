// Add movies here. Use an image URL or a local file path for poster.
const movies = [
  {
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    description: 'A thief who enters people’s dreams takes a job planting an idea inside someone’s mind.',
    poster: 'https://artofthemovies.co.uk/cdn/shop/files/inception_advance_SD18120_B-731214_920c5dfe-8d66-47c7-af74-11b98a83ebbf.jpg?v=1737545739',
    watchUrl: 'https://www.flickfinder.net/movie/inception-2010-27205'
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    description: 'Batman faces the Joker as a wave of crime throws Gotham into chaos.',
    poster: 'https://image.tmdb.org/t/p/original/2Ka2nOtSlwuFlsHtrtfHKMIjldC.jpg',
    watchUrl: 'https://www.flickfinder.net/movie/the-dark-knight-2008-155'
  },
  {
    title: 'Get Out',
    year: 2017,
    genre: 'Horror',
    description: 'A weekend visit with his girlfriend’s family takes a disturbing turn for a young photographer.',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-8WUppSgeZxjtii4rT25HmhuMqVHPfFARj-Dv6hB5BbParfUe_VXgIcw&s=10',
    watchUrl: 'https://www.flickfinder.net/movie/get-out-2017-419430'
  },
  {
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    description: 'An astronaut leaves his family to help search for a new home for humanity.',
    poster: 'https://www.movieposters.com/cdn/shop/products/interstellar1_8367fa45-5f0b-4b08-8e9b-8eaa4863f89d_1024x1024.jpg?v=1762971875',
    watchUrl: 'https://www.flickfinder.net/movie/interstellar-2014-157336'
  },
  {
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genre: 'Comedy',
    description: 'A hotel concierge and his young lobby boy get caught up in a dispute over a priceless painting.',
    poster: 'https://image.tmdb.org/t/p/original/mXBSQngYzqeIqhDP7LbogQHsKlL.jpg',
    watchUrl: 'https://www.flickfinder.net/movie/the-grand-budapest-hotel-2014-120467'
  },
  {
    title: 'Black Panther',
    year: 2018,
    genre: 'Action',
    description: 'T’Challa returns to Wakanda to take the throne and faces a challenger with ties to his family.',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXgfSQLAkc_F7kaDlelvhguNEjDMkqXVZzlugp2zyET-7IMbXZlya27Kr&s=10',
    watchUrl: 'https://www.flickfinder.net/movie/black-panther-2018-284054'
  },
  {
    title: 'Mad Max: Fury Road',
    year: 2015,
    genre: 'Action',
    description: 'In a desert wasteland, Max joins Furiosa as she leads a group of women to safety while a warlord’s army pursues them.',
    poster: 'https://www.impawards.com/intl/australia/2015/posters/mad_max_fury_road_ver7_xxlg.jpg',
    watchUrl: 'https://www.flickfinder.net/movie/mad-max-fury-road-2015-76341'
  },
  {
    title: 'John Wick',
    year: 2014,
    genre: 'Action',
    description: 'A retired hitman returns to the criminal underworld after a gang steals his car and kills the puppy his late wife left him.',
    poster: 'https://image.tmdb.org/t/p/original/sxeZgvv6mLZeGQMK1rvK3hw2W07.jpg',
    watchUrl: 'https://www.flickfinder.net/movie/john-wick-2014-245891'
  },
  {
    title: 'School of Rock',
    year: 2003,
    genre: 'Comedy',
    description: 'A struggling rock musician poses as a substitute teacher and turns his class into a band for a competition.',
    poster: 'https://www.originalfilmart.com/cdn/shop/products/schoolofrock_2003_advance_original_film_art_5000x.webp?v=1678217226',
    watchUrl: 'https://www.flickfinder.net/movie/the-school-of-rock-2003-1584'
  },
  {
    title: 'Game Night',
    year: 2018,
    genre: 'Comedy',
    description: 'A group of friends starts to suspect the kidnapping in their murder mystery game is real.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM%40._V1_.jpg',
    watchUrl: 'https://www.flickfinder.net/movie/game-night-2018-445571'
  },
  {
    title: 'A Quiet Place',
    year: 2018,
    genre: 'Horror',
    description: 'A family must stay silent to survive in a world where creatures hunt by sound.',
    poster: 'https://m.media-amazon.com/images/M/MV5BYWY2YzRlOWMtMTU1OC00Y2Y1LWJhNGQtZmM3MDU4MDE3NTUxXkEyXkFqcGc%40._V1_.jpg',
    watchUrl: 'https://www.flickfinder.net/movie/a-quiet-place-2018-447332'
  },
  {
    title: 'The Conjuring',
    year: 2013,
    genre: 'Horror',
    description: 'Two paranormal investigators try to help a family experiencing terrifying events in their new farmhouse.',
    poster: 'https://i.ebayimg.com/images/g/f5cAAOSwPVZmbV6w/s-l1200.jpg',
    watchUrl: 'https://www.flickfinder.net/movie/the-conjuring-2013-138843'
  },
  {
    title: 'Arrival',
    year: 2016,
    genre: 'Sci-Fi',
    description: 'A linguist is called in to communicate with alien visitors before rising tensions lead to war.',
    poster: 'https://miro.medium.com/1%2AKiD5VgBTPFxUdV5qt6jXSg.jpeg',
    watchUrl: 'https://www.flickfinder.net/movie/arrival-2016-329865'
  },
  {
    title: 'The Matrix',
    year: 1999,
    genre: 'Sci-Fi',
    description: 'A hacker discovers that the world he knows is a computer simulation and joins a rebellion against the machines that control it.',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY%40._V1_.jpg',
    watchUrl: 'https://www.flickfinder.net/movie/the-matrix-1999-603'
  }
]

// Each pair sets the glow and base colours of the poster placeholder.
const genreColours = {
  Action: ['#697565', '#181C14'],
  Comedy: ['#ECDFCC', '#3C3D37'],
  Horror: ['#3C3D37', '#181C14'],
  'Sci-Fi': ['#697565', '#3C3D37']
}

const search = document.querySelector('#search')
const genreSelect = document.querySelector('#genre')
const statusLine = document.querySelector('#status')
const movieList = document.querySelector('#movie-list')
const movieTemplate = document.querySelector('#movie-template')

const genres = [...new Set(movies.map(movie => movie.genre))].sort()

for (const genre of genres) {
  genreSelect.add(new Option(genre, genre))
}

function makeMovieCard(movie) {
  const card = movieTemplate.content.cloneNode(true)
  const art = card.querySelector('.movie-art')
  const [glow, shade] = genreColours[movie.genre] ?? ['#697565', '#181C14']

  art.style.setProperty('--glow', glow)
  art.style.setProperty('--shade', shade)
  art.querySelector('.poster-fallback').textContent = movie.title

  const poster = art.querySelector('.movie-poster')

  if (movie.poster) {
    poster.addEventListener('error', () => {
      poster.hidden = true
    }, { once: true })

    poster.hidden = false
    poster.src = movie.poster
  }

  const watchLink = card.querySelector('.watch-link')

  if (movie.watchUrl) {
    watchLink.href = movie.watchUrl
    watchLink.setAttribute('aria-label', `Where to watch ${movie.title} (opens in a new tab)`)
    watchLink.hidden = false
  }

  card.querySelector('.movie-meta').textContent = `${movie.genre} · ${movie.year}`
  card.querySelector('.movie-title').textContent = movie.title
  card.querySelector('.movie-description').textContent = movie.description

  return card
}

function showMovies() {
  const query = search.value.trim().toLowerCase()
  const selectedGenre = genreSelect.value

  const matches = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(query)
    const matchesGenre = selectedGenre === '' || movie.genre === selectedGenre

    return matchesTitle && matchesGenre
  })

  movieList.replaceChildren(...matches.map(makeMovieCard))

  const count = matches.length
  const movieText = count === 1 ? 'movie' : 'movies'

  statusLine.textContent = count === 0
    ? 'No movies match. Try another title or genre.'
    : `Showing ${count} ${movieText}`
}

search.addEventListener('input', showMovies)
genreSelect.addEventListener('change', showMovies)
showMovies()