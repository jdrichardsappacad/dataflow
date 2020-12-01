'use strict';

const numBetween = (min, max) => {
    return Math.random() * (max - min) + min;
};

const names = [
    'Adam Faidy',
    'Ahdari Scott',
    'Ameera Gates',
    'Andrew Cohen',
    'Andrew Dotterer',
    'Angelica Wilson',
    'Anna Bullard',
    'Antara Jaima',
    'Arianna Johnson',
    'Arjun Narain',
    'Autumn Wiggins',
    'Barry Mattern',
    'Bryant Klein',
    'Chad Calcote',
    'Chris Read',
    'Chris Clark',
    'Chris Sorini',
    'River Cha',
    'Dak Benger',
    'Dan Chin',
    'Daniel Miller',
    'Jimmy Sherrod',
    'Derek Nungesser',
    'Dez Adkins',
    'Elyse Steingold',
    'Erick Bravo',
    'Giiaga Agha',
    'Greg Gardini',
    'Jacob Premo',
    'James Monaco',
    'Jerzy Horst',
    'Jesse Lindloff',
    'Joe Alves',
    'JM Summers',
    'Jummy Park',
    'Kimi Zou',
    'Kristen Florey',
    'Lane Smit',
    'Matthew Hasan',
    'Michael Sanford',
    'Mishe Yi',
    'Mustafa Mousa',
    'Nhu-Y Phan',
    'Nick Bierman',
    "Nichole O'Brien",
    'Nick Menon',
    'Ramses Romero',
    'Rihana Chang',
    'Ryan Webster',
    'Sami Butler',
    'Samuel Nunn',
    'Seth Witfoth',
    'Tanner Schmutte',
    'Thanh Nguyen',
    'Tony Ngo',
    'Ty Newman',
    'William Vincent',
];

const students = names.map((student) => {
    return {
        name: student,
        houseId: numBetween(1, 4),
        createdAt: new Date(),
        updatedAt: new Date(),
    };
});

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Users',
            [
                {
                    name: 'Mylo James',
                    houseId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'JD Richards',
                    houseId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'James Robertson',
                    houseId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Nish Arya',
                    houseId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                ...students,
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};

module.exports = students;
