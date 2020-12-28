export default (apiUrl: string) => ({
  getUniversity(name: string) {
    return fetch(`${apiUrl}/search?name=${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
});
