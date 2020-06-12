export const vizyondakiler = async () => {
    const response = await fetch('your-url');
    const contactData = await response.json();
  
    return contactData.map(mapFilm);
};

export const yakinda = async () => {
    const response = await fetch('your-url');
    const contactData = await response.json();
  
    return contactData.map(mapFilm);
};

export const populer = async () => {
    const response = await fetch('your-url');
    const contactData = await response.json();
  
    return contactData.map(mapFilm);
};

export const kampanyalar = async () => {
    const response = await fetch('your-url');
    const contactData = await response.json();
  
    return contactData.map(mapKampanya);
};

export const sinemalar = async () => {
    const response = await fetch('your-url');
    const contactData = await response.json();
  
    return contactData.map(mapSinemalar);
};

const mapFilm = contact => {
    const {
        id, filmAdi, resimUrl, puan
    } = contact;
  
    return { id, filmAdi, resimUrl, puan };
};

const mapKampanya = contact => {
    const {
        id, kampanyaAdi, kampanyaUrl
    } = contact;
  
    return { id, kampanyaAdi, kampanyaUrl };
};

const mapSinemalar = contact => {
    const {
        id, sinemaAdi, adresBilgisi
    } = contact;

    return { id, sinemaAdi, adresBilgisi };
}