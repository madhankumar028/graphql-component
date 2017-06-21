import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

export function getUser() {

    const client = new Lokka({
        transport: new Transport('https://api.github.com/graphql')
    });

    var result;

    client.query(`
        User(madhankumar028) {
            id,
            name,
            login,
            location,
            bio,
            created_at {
                month,
                day,
                year,
                format(YYYY-MM-dd)
            }
        }
    `).then(response => {
        result = response;
    });

    console.log(result);
}
