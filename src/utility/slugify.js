function slugify(str){
    str = str.toLowerCase().trim();
    str = str.replace(/\s+/g, '-'); // Replace spaces with hyphens
    str = str.replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters except hyphens
    return str;
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