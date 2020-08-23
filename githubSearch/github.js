class Github {
    constructor() {
        this.client_id = "f14b0e5bf12095809c0c",
        this.client_secret = "a3705d74170f09e8e917855686d98f0f0056b638";
        this.repos_count = 5;
        this.repos_sort = "created_asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        

        return {
            profile,
            repos
        }
    }
}