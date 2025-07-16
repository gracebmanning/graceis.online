function slugifyBlogPost(date, str) {
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

function slugify(str){
    str = str.toLowerCase().trim();
    str = str.replace(/\s+/g, '-'); // Replace spaces with hyphens
    str = str.replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters except hyphens
    return str;
}

export function postRoute(post){
    return "/posts/" + slugifyBlogPost(post.date, post.title);
}

export function tagRoute(tag){
    return "/tags/" + tag;
}

export function projectRoute(proj){
    return "/projects/" + slugify(proj.title);
}

export function artRoute(art){
    return "/just-for-fun/" + slugify(art.title);
}

export function subpageRoute(subpage, item){
    return "/" + subpage + "/" + slugify(item.title);
}