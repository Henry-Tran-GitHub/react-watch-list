export async function get_tmdb_data_from_list(tmdbApi, list, params) {
    var response = [];

    for (const element of list) {
        const tmp = await tmdbApi.getTvListByID(element.tmdbApiFK, { params });
        response.push(tmp);
    }
    return response;
}