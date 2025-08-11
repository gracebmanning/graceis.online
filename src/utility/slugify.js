export function slugify(text){
    return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
}

function slugify2(str){
    str = str.toLowerCase().trim();
    str = str.replace(/\s+/g, '-'); // Replace spaces with hyphens
    str = str.replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters except hyphens
    return str;
}

export function projectRoute(proj){
    return "/projects/" + slugify2(proj.title);
}

export function artRoute(art){
    return "/just-for-fun/" + slugify2(art.title);
}

export function subpageRoute(subpage, item){
    return "/" + subpage + "/" + slugify2(item.title);
}