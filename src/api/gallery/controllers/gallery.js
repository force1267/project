'use strict';

/**
 *  gallery controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::gallery.gallery', ({ strapi }) => ({
    async find(ctx) {
        let { data, meta } = await super.find(ctx);
        const main = await strapi.service('api::main-page.main-page').find({ populate: "NahjulBalagha, Quran, QandA" })
        let NahjulBalagha = main.NahjulBalagha
        let Quran = main.Quran
        let QandA = main.QandA
        let p0, p1, p2
        if(NahjulBalagha && NahjulBalagha.id) p0 = NahjulBalagha.id;
        if(Quran && Quran.id) p1 = Quran.id;
        if(QandA && QandA.id) p2 = QandA.id;

        data = data.filter(gallery => ![p0, p1, p2].includes(gallery.id))
    
        return { data, meta };
      },
}));