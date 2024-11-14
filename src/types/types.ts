export interface PhimMoiCapNhatResponse {
    status: string;
    paginate: Paginate;
    items: MovieItem[];
}

export interface PhimDetailResponse {
    status: string;
    movie: PhimDetailItem;
}

export interface PhimDetailItem {
    id: string;
    name: string;
    slug: string;
    original_name: string;
    thumb_url: string;
    poster_url: string;
    created: string;
    modified: string;
    description: string;
    total_episodes: number;
    current_episode: string;
    time: string;
    quality: string;
    language: string;
    director: string;
    casts: string;
    category: CategoryItem;
    episodes: Episodes[];
}

export interface CategoryItem {
    [key: string]: {
        group: {
            id: string;
            name: string;
        };
        list: {
            id: string;
            name: string;
        }[];
    };
}

export interface Episodes {
    server_name: string;
    items: EpisodeItem[];
}

export interface EpisodeItem {
    name: string;
    slug: string;
    embed: string;
    m3u8: string;
}

export interface Paginate {
    current_page: number;
    total_page: number;
    total_items: number;
    items_per_page: number;
}

export interface MovieItem {
    id: string;
    name: string;
    slug: string;
    original_name: string;
    thumb_url: string;
    poster_url: string;
    created: string;
    modified: string;
    description: string;
    total_episodes: number;
    current_episode: string;
    time: string;
    quality: string;
    language: string;
    director: string;
    casts: string;
}

