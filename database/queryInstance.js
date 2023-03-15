import {mysqlConnection} from './connectDB'

// Wrapping mysql query method with promise to avoid call backs
export const promisifiedQueryWrapper = (query) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(query, function (error, results, _) {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

