/*eslint-env node*/

const tag = (t, val) => `<${t}>${val}</${t}>`;

const ratingToString = rating => {
    if (rating > 0) return 'good';
    else if (rating < 0) return 'bad';
    return 'ugly';
};

const MID = 3;

const normalize = rating => rating - MID;

const wrap = (t, rating) => tag(t, ratingToString(normalize(rating)));

const a = rating => wrap('a', rating);

const b = rating => wrap('b', rating);

const c = rating => wrap('c', rating);

module.exports = { tag, ratingToString, normalize, a, b, c };
