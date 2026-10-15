// models/karakterModel.js
let karakterList = [
    { id: 1, nama: "Future Princess", elemen: "Light", role: "Tank", senjata: "Liberator" },
    { id: 2, nama: "Beth", elemen: "Dark", role: "Warrior", senjata: "Predator" },
    { id: 3, nama: "Kamael", elemen: "Earth", role: "Support", senjata: "Equinox" }
];

module.exports = {
    getAll: () => karakterList,
    
    getById: (id) => {
        return karakterList.find(k => k.id === parseInt(id));
    },
    
    create: (data) => {
        const newKarakter = {
            id: karakterList.length > 0 ? karakterList[karakterList.length - 1].id + 1 : 1,
            nama: data.nama,
            elemen: data.elemen,
            role: data.role,
            senjata: data.senjata
        };
        karakterList.push(newKarakter);
        return newKarakter;
    },

    update: (id, data) => {
        const index = karakterList.findIndex(k => k.id === parseInt(id));
        if (index === -1) return null;
        karakterList[index] = { id: parseInt(id), ...data };
        return karakterList[index];
    },

    delete: (id) => {
        const index = karakterList.findIndex(k => k.id === parseInt(id));
        if (index === -1) return null;
        const deleted = karakterList.splice(index, 1);
        return deleted[0];
    }
};