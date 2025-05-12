export function slugify(date, str) {
    str = str.toLowerCase().trim();
    str = str.replace(/\s+/g, '-'); // Replace spaces with hyphens
    str = str.replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters except hyphens

    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(d.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    return formattedDate + "-" + str;
}

export function postRoute(post){
    return "/blog/posts/" + slugify(post.date, post.title);
}

export function tagRoute(tag){
    return "/blog/tags/" + tag;
}