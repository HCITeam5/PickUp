// 1)

db.actors.insert({ actor: "Richard Gere", born: 1949, movies: ['Pretty Woman', 'Runaway Bride', 'Chicago'] }, { upsert: true });
db.actors.insert({ actor: "Julia Roberts", born: 1967, movies: ['Pretty Woman', 'Runaway Bride', 'Osage County'] }, { upsert: true });
db.actors.insert({ actor: "Meryl Streep", born: 1948, movies: ['The Devil Wears Prada', 'Osage County', 'The Iron Lady', 'The Manchurian Candidate'] }, { upsert: true });

db.actors.update({ actor: 'Meryl Streep' }, { $set: { gender: 'Female' } });
db.actors.update({ actor: 'Julia Roberts' }, { $set: { gender: 'Female' } });
db.actors.update({ actor: 'Richard Gere' }, { $set: { gender: 'Male' } });

db.actors.insert({ actor: "Johnny Depp", born: 1963, movies: ['The Invisible Man', 'Blow', 'Finding Neverland', 'Sweeney Todd: The Demon Barber of Fleet Street'], gender: 'Male' }, { upsert: true });
db.actors.insert({ actor: "Robert Downey Jr.", born: 1965, movies: ['Avengers: Infinity War', 'Sherlock Holmes 3', 'Spider-Man: Homecoming', 'Chef'], gender: 'Male' }, { upsert: true });
db.actors.insert({ actor: "Scarlett Johansson", born: 1984, movies: ['Avengers: Infinity War', 'Rough Night', 'Ghost in the Shell', 'The Jungle Book'], gender: 'Female' }, { upsert: true });
db.actors.insert({ actor: "Bruce Willis", born: 1955, movies: ['Glass', 'Die Hard', 'Ghost in the Shell', 'North'], gender: 'Male' }, { upsert: true });
db.actors.insert({ actor: "Robin Williams", born: 1951, movies: ['The Face of Love', 'The Angriest Man in Brooklyn', 'A Merry Friggin Christmas'], gender: 'Male' }, { upsert: true });

db.actors.find().pretty;

// 2)
map = function() {
    for (var i in this.movies) {
        key = { movie: this.movies[i] };
        value = { actors: [this.actor] };
        emit(key, value);
        emit(key, value);
    }
}

reduce = function(key, values) {
    actor_list = { actors: [] };
    for (var i in values) {
        actor_list.actors = values[i].actors.concat(actor_list.actors);
    }
    return actor_list;
}

db.actors.mapReduce(map, reduce, "movies");

db.movies.aggregate([{
        $project: {
            _id: '$_id',
            actors: '$value.actors'
        }
    },
    {
        $out: 'movies'
    }
]);

// #3
db.movies.drop();

db.actors.aggregate([{
        $unwind: '$movies'
    },
    {
        $group: {
            _id: {
                movies: '$movies'
            },
            actors: {
                $push: '$actor'
            }
        }
    }
]);

db.movies.find();

// #4
db.movies.drop();

db.actors.aggregate([{
    $match: {
        'gender': {
            $in: ['Female']
        }
    }
}, {
    $unwind: '$movies'
}, {
    $group: {
        _id: {
            movies: '$movies'
        },
        actors: {
            $push: '$actor'
        }
    }
}]);

db.movies.find();

// #5
This can 't be done due to the VM'
s current version of Mongo which is at 3.2 .11.In order to do the last name, mongo needs to be updated to 3.6 which allows you to this much easier.