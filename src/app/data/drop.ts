import { Item, Grade } from '../models/drop';

export const DROPS: Item[] =
    [
        {
            id: 100,
            grade: Grade.BRONZE,
            name: `Proof of Hero`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/a/a7/Heros_proof.png`,
            servantsURL: `assets/drop-servants/drop-bnz-proof.PNG`,
            drops: [
                {
                    area: `Okeanos`,
                    quest: `Pirate Ship`,
                    ap: 12,
                    apPerDrop: 20.4,
                    dropRate: 58.8
                },
                {
                    area: `Orleans`,
                    quest: `Marseille`,
                    ap: 7,
                    apPerDrop: 23.5,
                    dropRate: 29.8
                },
                {
                    area: `Orleans`,
                    quest: `Pirate Island`,
                    ap: 13,
                    apPerDrop: 23.5,
                    dropRate: 55.4
                },
                {
                    area: `Septem`,
                    quest: `Mediolanum`,
                    ap: 9,
                    apPerDrop: 25.5,
                    dropRate: 35.3
                }
            ]
        },
        {
            id: 101,
            grade: Grade.BRONZE,
            name: `Evil Bone`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/c/ca/Unlucky_bone.png`,
            servantsURL: `assets/drop-servants/drop-bnz-bone.PNG`,
            drops: [
                {
                    area: `Fuyuki`,
                    quest: `Unknown Coordinates X-C`,
                    ap: 4,
                    apPerDrop: 22.4,
                    dropRate: 17.9
                },
                {
                    area: `Fuyuki`,
                    quest: `Unknown Coordinates X-G`,
                    ap: 15,
                    apPerDrop: 23.6,
                    dropRate: 63.5
                },
                {
                    area: `Camelot`,
                    quest: `Sandstorm Desert`,
                    ap: 19,
                    apPerDrop: 30.0,
                    dropRate: 63.3
                },
                {
                    area: `Septem`,
                    quest: `Germania`,
                    ap: 15,
                    apPerDrop: 30.6,
                    dropRate: 49.1
                },
                {
                    area: `Okeanos`,
                    quest: `Sunken Rock Seas`,
                    ap: 17,
                    apPerDrop: 46.8,
                    dropRate: 36.3
                }
            ]
        },
        {
            id: 102,
            grade: Grade.BRONZE,
            name: `Dragon Fang`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/6/6f/Dragon_fang.png`,
            servantsURL: `assets/drop-servants/drop-bnz-fang.PNG`,
            drops: [
                {
                    area: `E Pluribus Unum`,
                    quest: `Deming`,
                    ap: 17,
                    apPerDrop: 27.4,
                    dropRate: 62.0
                },
                {
                    area: `Okeanos`,
                    quest: `Island of Wyverns`,
                    ap: 14,
                    apPerDrop: 28.2,
                    dropRate: 49.6
                },
                {
                    area: `Babylonia`,
                    quest: `Eridu`,
                    ap: 21,
                    apPerDrop: 33.8,
                    dropRate: 62.2
                },
                {
                    area: `Agartha`,
                    quest: `Foothills Jungle`,
                    ap: 21,
                    apPerDrop: 42.6,
                    dropRate: 49.3
                },
                {
                    area: `Camelot`,
                    quest: `East Village`,
                    ap: 19,
                    apPerDrop: 44.6,
                    dropRate: 42.6
                },
                {
                    area: `Salem`,
                    quest: `Jail`,
                    ap: 21,
                    apPerDrop: 51.5,
                    dropRate: 40.8
                },
                {
                    area: `Orleans`,
                    quest: `La Charite`,
                    ap: 7,
                    apPerDrop: 60.3,
                    dropRate: 11.6
                },
                {
                    area: `Fuyuki`,
                    quest: `Mobile Coordinate No.0`,
                    ap: 7,
                    apPerDrop: 68.8,
                    dropRate: 10.2
                }
            ]
        },
        {
            id: 103,
            grade: Grade.BRONZE,
            name: `Void's Dust`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/4/43/Voids_refuse.png`,
            servantsURL: `assets/drop-servants/drop-bnz-dust.PNG`,
            drops: [
                {
                    area: `E Pluribus Unum`,
                    quest: `Charlotte`,
                    ap: 20,
                    apPerDrop: 31.2,
                    dropRate: 64.2
                },
                {
                    area: `Camelot`,
                    quest: `West Village Ruins`,
                    ap: 20,
                    apPerDrop: 42.1,
                    dropRate: 47.5
                },
                {
                    area: `Septem`,
                    quest: `Massilia`,
                    ap: 9,
                    apPerDrop: 53.6,
                    dropRate: 16.8
                },
                {
                    area: `Okeanos`,
                    quest: `Archipelago (Quiet Bay)`,
                    ap: 15,
                    apPerDrop: 59.2,
                    dropRate: 25.3
                },
                {
                    area: `Agartha`,
                    quest: `Ys`,
                    ap: 21,
                    apPerDrop: 63.2,
                    dropRate: 33.2
                }
            ]
        },
        {
            id: 104,
            grade: Grade.BRONZE,
            name: `Fool's Chain`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/5/55/Chains_of_The_Fool.png`,
            servantsURL: `assets/drop-servants/drop-bnz-chains.PNG`,
            drops: [
                {
                    area: `Camelot`,
                    quest: `Wastelands of Death`,
                    ap: 19,
                    apPerDrop: 29.2,
                    dropRate: 65.1
                },
                {
                    area: `Salem`,
                    quest: `Isolated Mansion`,
                    ap: 21,
                    apPerDrop: 51.5,
                    dropRate: 40.7
                },
                {
                    area: `Camelot`,
                    quest: `Great Temple`,
                    ap: 22,
                    apPerDrop: 51.6,
                    dropRate: 42.6
                },
                {
                    area: `Salem`,
                    quest: `Wharf`,
                    ap: 21,
                    apPerDrop: 52.6,
                    dropRate: 39.9
                },
                {
                    area: `Agartha`,
                    quest: `Northern Cliffs`,
                    ap: 21,
                    apPerDrop: 52.8,
                    dropRate: 39.8
                }
            ]
        },
        {
            id: 105,
            grade: Grade.BRONZE,
            name: `Deadly Poisonous Needle`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/c/cc/Stinger_of_Certain_Death.png`,
            servantsURL: `assets/drop-servants/drop-bnz-stinger.png`,
            drops: [
                {
                    area: `Babylonia`,
                    quest: `Field of Reeds`,
                    ap: 21,
                    apPerDrop: 33.6,
                    dropRate: 62.6
                },
                {
                    area: `Babylonia`,
                    quest: `Plateau`,
                    ap: 20,
                    apPerDrop: 40.9,
                    dropRate: 48.9
                },
                {
                    area: `Anastasia`,
                    quest: `Anchor Point`,
                    ap: 20,
                    apPerDrop: 47.5,
                    dropRate: 42.1
                },
                {
                    area: `Anastasia`,
                    quest: `Icy Cavern`,
                    ap: 20,
                    apPerDrop: 49.5,
                    dropRate: 40.4
                }
            ]
        },
        {
            id: 106,
            grade: Grade.BRONZE,
            name: `Mystic Spinal Fluid`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/b/bc/Magical_Cerebrospinal_Fluid_icon.png`,
            servantsURL: `assets/drop-servants/drop-bnz-fluid.PNG`,
            drops: [
                {
                    area: `Shinjuku`,
                    quest: `Shinjuku Station`,
                    ap: 21,
                    apPerDrop: 32.0,
                    dropRate: 65.5
                },
                {
                    area: `Shinjuku`,
                    quest: `Yoyogi 2-chome`,
                    ap: 20,
                    apPerDrop: 49.8,
                    dropRate: 40.1
                },
                {
                    area: `Shinjuku`,
                    quest: `Route 20`,
                    ap: 20,
                    apPerDrop: 50.0,
                    dropRate: 40.0
                },
                {
                    area: `Shinjuku`,
                    quest: `Shinjuku 4-Chome`,
                    ap: 21,
                    apPerDrop: 51.7,
                    dropRate: 40.6
                }
            ]
        },
        {
            id: 107,
            grade: Grade.BRONZE,
            name: `Stake of Wailing Night`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/3/35/Iron_Stake.png`,
            servantsURL: `assets/drop-servants/drop-bnz-stake.PNG`,
            drops: [
                {
                    area: `Salem`,
                    quest: `Gallows Hill`,
                    ap: 21,
                    apPerDrop: 31.4,
                    dropRate: 67.0
                },
                {
                    area: `Salem`,
                    quest: `Carter Residence`,
                    ap: 20,
                    apPerDrop: 50.0,
                    dropRate: 40.0
                },
                {
                    area: `Salem`,
                    quest: `Isolated Mansion`,
                    ap: 21,
                    apPerDrop: 51.6,
                    dropRate: 40.7
                },
                {
                    area: `Salem`,
                    quest: `Empty House`,
                    ap: 21,
                    apPerDrop: 52.2,
                    dropRate: 40.2
                },
                {
                    area: `Salem`,
                    quest: `Meadow`,
                    ap: 21,
                    apPerDrop: 53.2,
                    dropRate: 39.4
                }
            ]
        },
        {
            id: 108,
            grade: Grade.BRONZE,
            name: `Mystic Gunpowder`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/a/af/Stimulus_Gunpowder.png`,
            servantsURL: `assets/drop-servants/drop-bnz-gunpowder.PNG`,
            drops: [
                {
                    area: `Anastasia`,
                    quest: `Yaga Smolensk`,
                    ap: 20,
                    apPerDrop: 30.3,
                    dropRate: 66.0
                },
                {
                    area: `Anastasia`,
                    quest: `Rebel Stronghold`,
                    ap: 21,
                    apPerDrop: 50.0,
                    dropRate: 42.0
                },
                {
                    area: `Anastasia`,
                    quest: `Yaga Sychyovka`,
                    ap: 21,
                    apPerDrop: 50.9,
                    dropRate: 41.3
                },
                {
                    area: `Anastasia`,
                    quest: `Burned Village`,
                    ap: 21,
                    apPerDrop: 52.1,
                    dropRate: 40.3
                },
                {
                    area: `Anastasia`,
                    quest: `Yaga Vyazma`,
                    ap: 21,
                    apPerDrop: 52.6,
                    dropRate: 39.9
                }
            ]
        },
        // Silver
        {
            id: 200,
            grade: Grade.SILVER,
            name: `Seed of Yggdrasil`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/4/41/Yggdrasil_seed.png`,
            servantsURL: `assets/drop-servants/drop-svr-seed.PNG`,
            drops: [
                {
                    area: `Babylonia`,
                    quest: `Fallen Babylon`,
                    ap: 20,
                    apPerDrop: 40.2,
                    dropRate: 49.8
                },
                {
                    area: `Salem`,
                    quest: `Quiet Forest`,
                    ap: 20,
                    apPerDrop: 40.7,
                    dropRate: 49.2
                },
                {
                    area: `Salem`,
                    quest: `Hideout`,
                    ap: 21,
                    apPerDrop: 46.6,
                    dropRate: 45.0
                },
                {
                    area: `Shimosa`,
                    quest: `Rice Field`,
                    ap: 18,
                    apPerDrop: 50.3,
                    dropRate: 39.8
                },
                {
                    area: `Agartha`,
                    quest: `Riverside Town`,
                    ap: 20,
                    apPerDrop: 50.6,
                    dropRate: 39.6
                },
                {
                    area: `Okeanos`,
                    quest: `Bountiful Sea`,
                    ap: 18,
                    apPerDrop: 60.1,
                    dropRate: 30.0
                },
                {
                    area: `Septem`,
                    quest: `Britannia`,
                    ap: 10,
                    apPerDrop: 85.9,
                    dropRate: 11.6
                }
            ]
        },
        {
            id: 201,
            grade: Grade.SILVER,
            name: `Ghost Lantern`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/b/b1/Ghost_lantern.png`,
            servantsURL: `assets/drop-servants/drop-svr-lantern.PNG`,
            drops: [
                {
                    area: `Babylonia`,
                    quest: `Kutha`,
                    ap: 21,
                    apPerDrop: 52.2,
                    dropRate: 40.2
                },
                {
                    area: `Camelot`,
                    quest: `Mausoleum of the Evening Bell`,
                    ap: 19,
                    apPerDrop: 58.4,
                    dropRate: 32.6
                },
                {
                    area: `Okeanos`,
                    quest: `Stormy Seas`,
                    ap: 15,
                    apPerDrop: 67.4,
                    dropRate: 22.2
                },
                {
                    area: `Shimosa`,
                    quest: `Rice Field`,
                    ap: 20,
                    apPerDrop: 77.8,
                    dropRate: 25.7
                },
                {
                    area: `Septem`,
                    quest: `Mt. Etna`,
                    ap: 9,
                    apPerDrop: 110.2,
                    dropRate: 8.2
                }
            ]
        },
        {
            id: 202,
            grade: Grade.SILVER,
            name: `Octuplet Crystals`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/8/84/Octuplet_twin_crystals.png`,
            servantsURL: `assets/drop-servants/drop-svr-crystal.PNG`,
            drops: [
                {
                    area: `Agartha`,
                    quest: `Peach Blossom Shangri-La`,
                    ap: 21,
                    apPerDrop: 52.0,
                    dropRate: 40.4
                },
                {
                    area: `Camelot`,
                    quest: `Holy City`,
                    ap: 20,
                    apPerDrop: 73.1,
                    dropRate: 27.4
                },
                {
                    area: `Götterdämmerung`,
                    quest: `Heroes' Cellar`,
                    ap: 21,
                    apPerDrop: 84.9,
                    dropRate: 24.7
                },
                {
                    area: `Shimosa`,
                    quest: `Rear Mountain (Nameless Sacred Mountain)`,
                    ap: 21,
                    apPerDrop: 86.3,
                    dropRate: 24.3
                },
                {
                    area: `Okeanos`,
                    quest: `Two-Current Sea`,
                    ap: 14,
                    apPerDrop: 126.4,
                    dropRate: 11.1
                },
                {
                    area: `Septem`,
                    quest: `Gaul`,
                    ap: 9,
                    apPerDrop: 142.9,
                    dropRate: 6.3
                },
                {
                    area: `Chaldea Gate (Wed)`,
                    quest: `WED Berserker Training Ground- Int`,
                    ap: 20,
                    apPerDrop: 177.0,
                    dropRate: 11.3
                }
            ]
        },
        {
            id: 203,
            grade: Grade.SILVER,
            name: `Serpent Jewel`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/2/28/Snake_jewel.png`,
            servantsURL: `assets/drop-servants/drop-svr-snake.PNG`,
            drops: [
                {
                    area: `Agartha`,
                    quest: `Chasm in the Earth`,
                    ap: 21,
                    apPerDrop: 52.2,
                    dropRate: 40.2
                },
                {
                    area: `Babylonia`,
                    quest: `Bog`,
                    ap: 21,
                    apPerDrop: 83.9,
                    dropRate: 25.0
                },
                {
                    area: `Okeanos`,
                    quest: `Sunken Rock Seas`,
                    ap: 17,
                    apPerDrop: 107.2,
                    dropRate: 15.9
                },
                {
                    area: `Chaldea Gate (Fri)`,
                    quest: `FRI Caster Training Ground- Nov`,
                    ap: 10,
                    apPerDrop: 125.8,
                    dropRate: 7.9
                },
                {
                    area: `Chaldea Gate (Fri)`,
                    quest: `FRI Caster Training Ground- Int`,
                    ap: 20,
                    apPerDrop: 134.0,
                    dropRate: 14.9
                },
                {
                    area: `Camelot`,
                    quest: `Dune of Dawn`,
                    ap: 19,
                    apPerDrop: 134.8,
                    dropRate: 14.1
                }
            ]
        },
        {
            id: 204,
            grade: Grade.SILVER,
            name: `Phoenix Feather`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/c/c4/Phoenix_plume.png`,
            servantsURL: `assets/drop-servants/drop-svr-feather.PNG`,
            drops: [
                {
                    area: `Salem`,
                    quest: `Town Hall`,
                    ap: 21,
                    apPerDrop: 59.5,
                    dropRate: 35.3
                },
                {
                    area: `Agartha`,
                    quest: `Great Underground River`,
                    ap: 21,
                    apPerDrop: 69.5,
                    dropRate: 30.2
                },
                {
                    area: `Agartha`,
                    quest: `Riverside Town`,
                    ap: 20,
                    apPerDrop: 98.6,
                    dropRate: 20.3
                },
                {
                    area: `Salem`,
                    quest: `Empty House`,
                    ap: 21,
                    apPerDrop: 103.3,
                    dropRate: 20.3
                },
                {
                    area: `Chaldea Gate (Sun)`,
                    quest: `SUN Saber Training Ground- Adv`,
                    ap: 30,
                    apPerDrop: 174.4,
                    dropRate: 17.2
                },
                {
                    area: `Okeanos`,
                    quest: `Bountiful Sea`,
                    ap: 18,
                    apPerDrop: 191.0,
                    dropRate: 9.4
                }
            ]
        },
        {
            id: 205,
            grade: Grade.SILVER,
            name: `Eternal Gear`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/d/d5/Infinity_gear.png`,
            servantsURL: `assets/drop-servants/drop-svr-gear.PNG`,
            drops: [
                {
                    area: `Shinjuku`,
                    quest: `Barrel Tower`,
                    ap: 21,
                    apPerDrop: 45.6,
                    dropRate: 46.0
                },
                {
                    area: `E Pluribus Unum`,
                    quest: `Chicago`,
                    ap: 21,
                    apPerDrop: 51.4,
                    dropRate: 40.8
                },
                {
                    area: `SIN`,
                    quest: `Seeding Point`,
                    ap: 20,
                    apPerDrop: 66.5,
                    dropRate: 30.1,
                },
                {
                    area: `Shinjuku`,
                    quest: `Kabukicho`,
                    ap: 21,
                    apPerDrop: 67.1,
                    dropRate: 31.3
                },
                {
                    area: `SIN`,
                    quest: `Shiquan Canyon`,
                    ap: 21,
                    apPerDrop: 69.7,
                    dropRate: 30.1,
                },
                {
                    area: `London`,
                    quest: `Clerkenwell`,
                    ap: 18,
                    apPerDrop: 72.4,
                    dropRate: 24.9
                },
                {
                    area: `Camelot`,
                    quest: `Atlas Institute`,
                    ap: 20,
                    apPerDrop: 99.5,
                    dropRate: 20.1
                },
                {
                    area: `E Pluribus Unum`,
                    quest: `Denver`,
                    ap: 17,
                    apPerDrop: 101.2,
                    dropRate: 16.8
                },
                {
                    area: `Chaldea Gate (Sat)`,
                    quest: `SAT Assassin Training Ground- Nov`,
                    ap: 10,
                    apPerDrop: 108.2,
                    dropRate: 9.2
                }
            ]
        },
        {
            id: 206,
            grade: Grade.SILVER,
            name: `Forbidden Page`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/e/e6/Forbidden_page.png`,
            servantsURL: `assets/drop-servants/drop-svr-pages.PNG`,
            drops: [
                {
                    area: `Shinjuku`,
                    quest: `Shinjuku 2-chome`,
                    ap: 21,
                    apPerDrop: 69.3,
                    dropRate: 30.3
                },
                {
                    area: `London`,
                    quest: `Hyde Park`,
                    ap: 20,
                    apPerDrop: 73.4,
                    dropRate: 27.2
                },
                {
                    area: `Chaldea Gate (Fri)`,
                    quest: `FRI Caster Training Ground- Adv`,
                    ap: 30,
                    apPerDrop: 195.0,
                    dropRate: 15.4
                },
                {
                    area: `Chaldea Gate (Fri)`,
                    quest: `FRI Caster Training Ground- Adv`,
                    ap: 40,
                    apPerDrop: 195.2,
                    dropRate: 20.5
                },
                {
                    area: `Camelot`,
                    quest: `Atlas Institute`,
                    ap: 20,
                    apPerDrop: 253.2,
                    dropRate: 7.9
                }
            ]
        },
        {
            id: 207,
            grade: Grade.SILVER,
            name: `Homunculus Baby`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/3/3c/Homunculus_baby.png`,
            servantsURL: `assets/drop-servants/drop-svr-homunculus.PNG`,
            drops: [
                {
                    area: `Salem`,
                    quest: `Whateley Residence`,
                    ap: 21,
                    apPerDrop: 52.3,
                    dropRate: 40.2
                },
                {
                    area: `London`,
                    quest: `Southwark`,
                    ap: 19,
                    apPerDrop: 62.9,
                    dropRate: 30.2
                },
                {
                    area: `Chaldea Gate (Tue)`,
                    quest: `TUE Lancer Training Ground- Adv`,
                    ap: 30,
                    apPerDrop: 167.5,
                    dropRate: 17.9
                }
            ]
        },
        {
            id: 208,
            grade: Grade.SILVER,
            name: `Meteor Horseshoe`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/3/34/Meteoric_horseshoe.png`,
            servantsURL: `assets/drop-servants/drop-svr-horseshoe.PNG`,
            drops: [
                {
                    area: `Camelot`,
                    quest: `Land of the Void`,
                    ap: 22,
                    apPerDrop: 48.8,
                    dropRate: 45.0
                },
                {
                    area: `Okeanos`,
                    quest: `Caldera Island`,
                    ap: 17,
                    apPerDrop: 131.3,
                    dropRate: 12.9
                },
                {
                    area: `Chaldea Gate (Thu)`,
                    quest: `THU Rider Training Ground- Int`,
                    ap: 20,
                    apPerDrop: 178.6,
                    dropRate: 11.2
                },
                {
                    area: `Chaldea Gate (Thu)`,
                    quest: `THU Rider Training Ground- Adv`,
                    ap: 30,
                    apPerDrop: 187.0,
                    dropRate: 16.0
                }
            ]
        },
        {
            id: 209,
            grade: Grade.SILVER,
            name: `Great Knight Medal`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/6/67/Medal_of_Great_Knight.png`,
            servantsURL: `assets/drop-servants/drop-svr-medal.PNG`,
            drops: [
                {
                    area: `Camelot`,
                    quest: `Royal Castle`,
                    ap: 21,
                    apPerDrop: 59.7,
                    dropRate: 35.2
                },
                {
                    area: `Camelot`,
                    quest: `Main Gate`,
                    ap: 20,
                    apPerDrop: 65.8,
                    dropRate: 30.4
                },
                {
                    area: `Camelot`,
                    quest: `Round Table Fortress`,
                    ap: 19,
                    apPerDrop: 103.9,
                    dropRate: 18.3
                }
            ]
        },
        {
            id: 210,
            grade: Grade.SILVER,
            name: `Seashell of Reminiscence`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/e/eb/Seashell.png`,
            servantsURL: `assets/drop-servants/drop-svr-seashell.PNG`,
            drops: [
                {
                    area: `Babylonia`,
                    quest: `Observatory`,
                    ap: 21,
                    apPerDrop: 52.1,
                    dropRate: 40.3
                },
                {
                    area: `Okeanos`,
                    quest: `Archipelago (Hidden Island)`,
                    ap: 16,
                    apPerDrop: 59.9,
                    dropRate: 26.7
                },
                {
                    area: `Anastasia`,
                    quest: `Icy Cavern`,
                    ap: 20,
                    apPerDrop: 79.4,
                    dropRate: 25.2
                },
                {
                    area: `Chaldea Gate (Sun)`,
                    quest: `SUN Saber Training Ground- Exp`,
                    ap: 40,
                    apPerDrop: 193.9,
                    dropRate: 20.6
                }
            ]
        },
        {
            id: 211,
            grade: Grade.SILVER,
            name: `Refined Magatama`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/9/9c/Kotan_Magatama.png`,
            servantsURL: `assets/drop-servants/drop-svr-magatama.PNG`,
            drops: [
                {
                    area: `Shimosa`,
                    quest: `Castle Town`,
                    ap: 21,
                    apPerDrop: 52.0,
                    dropRate: 40.4
                },
                {
                    area: `Shimosa`,
                    quest: `Toke Castle`,
                    ap: 21,
                    apPerDrop: 79.9,
                    dropRate: 26.3
                },
                {
                    area: `Shimosa`,
                    quest: `Village`,
                    ap: 21,
                    apPerDrop: 81.8,
                    dropRate: 25.7
                }
            ]
        },
        {
            id: 212,
            grade: Grade.SILVER,
            name: `Eternal Ice`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/8/84/Permafrost_Ice_Crystal.png`,
            servantsURL: `assets/drop-servants/drop-svr-icecrystal.PNG`,
            drops: [
                {
                    area: `Anastasia`,
                    quest: `Yaga Moscow`,
                    ap: 21,
                    apPerDrop: 46.1,
                    dropRate: 45.5
                },
                {
                    area: `Anastasia`,
                    quest: `Crushed Village`,
                    ap: 21,
                    apPerDrop: 81.7,
                    dropRate: 25.7
                },
                {
                    area: `Anastasia`,
                    quest: `Yaga Demensk`,
                    ap: 21,
                    apPerDrop: 83.8,
                    dropRate: 25.1
                }
            ]
        },
        {
            id: 213,
            grade: Grade.SILVER,
            name: `Giant's Ring`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/b/b3/Giant%27s_Ring.png`,
            servantsURL: `assets/drop-servants/drop-svr-giantring.PNG`,
            drops: [
                {
                    area: `Götterdämmerung`,
                    quest: `Giants' Flower Patio`,
                    ap: 20,
                    apPerDrop: 49.1,
                    dropRate: 40.8
                },
                {
                    area: `SIN`,
                    quest: `Neighboring Village`,
                    ap: 20,
                    apPerDrop: 77.8,
                    dropRate: 25.7,
                },
                {
                    area: `Götterdämmerung`,
                    quest: `Knoll of Thin Ice`,
                    ap: 20,
                    apPerDrop: 78.7,
                    dropRate: 25.4
                },
                {
                    area: `Götterdämmerung`,
                    quest: `Ablazed Mansion`,
                    ap: 21,
                    apPerDrop: 81.7,
                    dropRate: 25.7
                }
            ]
        },
        {
            id: 214,
            grade: Grade.SILVER,
            name: `Aurora Steel`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/e/e7/Aurora_Steel.png`,
            servantsURL: `assets/drop-servants/drop-svr-aurorasteel.PNG`,
            drops: [
                {
                    area: `Götterdämmerung`,
                    quest: `Castle of Ice and Snow`,
                    ap: 21,
                    apPerDrop: 54.2,
                    dropRate: 38.8
                },
                {
                    area: `Götterdämmerung`,
                    quest: `67th Settlement`,
                    ap: 21,
                    apPerDrop: 82.2,
                    dropRate: 25.5
                },
                {
                    area: `Götterdämmerung`,
                    quest: `23rd Settlement`,
                    ap: 21,
                    apPerDrop: 84.0,
                    dropRate: 25.0
                },
                {
                    area: `Götterdämmerung`,
                    quest: `Ablazed Mansion`,
                    ap: 21,
                    apPerDrop: 85.1,
                    dropRate: 24.7
                }
            ]
        },
        {
            id: 215,
            grade: Grade.SILVER,
            name: `Ancient Bell of Tranquility`,
            imgURL: `https://static.wikia.nocookie.net/fategrandorder/images/f/f4/AncientBellOfTranquilityIcon.png`,
            servantsURL: `assets/drop-servants/drop-svr-bell.PNG`,
            drops: [
                {
                    area: `SIN`,
                    quest: `Ba Men Cave`,
                    ap: 21,
                    apPerDrop: 53.4,
                    dropRate: 39.3
                },
                {
                    area: `SIN`,
                    quest: `Daping Yu`,
                    ap: 21,
                    apPerDrop: 82.8,
                    dropRate: 25.4
                },
                {
                    area: `SIN`,
                    quest: `Prison Camp`,
                    ap: 21,
                    apPerDrop: 83.1,
                    dropRate: 25.3
                },
                {
                    area: `SIN`,
                    quest: `Xianyang`,
                    ap: 21,
                    apPerDrop: 105.5,
                    dropRate: 19.9,
                },
            ]
        },
        // Gold
        {
            id: 300,
            grade: Grade.GOLD,
            name: `Claw of Chaos`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/6/67/Talon_of_chaos.png`,
            servantsURL: `assets/drop-servants/drop-gld-claw.PNG`,
            drops: [
                {
                    area: `E Pluribus Unum`,
                    quest: `Des Moines`,
                    ap: 18,
                    apPerDrop: 89.8,
                    dropRate: 20.0
                },
                {
                    area: `Agartha`,
                    quest: `Underground Plains`,
                    ap: 20,
                    apPerDrop: 98.3,
                    dropRate: 20.4
                },
                {
                    area: `Anastasia`,
                    quest: `Yaga Ryazan`,
                    ap: 21,
                    apPerDrop: 101.6,
                    dropRate: 20.7
                },
                {
                    area: `Shinjuku`,
                    quest: `Shinjuku 4-Chome`,
                    ap: 21,
                    apPerDrop: 116.4,
                    dropRate: 18.0
                },
                {
                    area: `Babylonia`,
                    quest: `Ur`,
                    ap: 21,
                    apPerDrop: 117.1,
                    dropRate: 17.9
                },
                {
                    area: `Chaldea Gate (Wed)`,
                    quest: `WED Berserker Training Ground- Adv`,
                    ap: 30,
                    apPerDrop: 389.6,
                    dropRate: 7.7
                },
                {
                    area: `Septem`,
                    quest: `Germania`,
                    ap: 15,
                    apPerDrop: 535.7,
                    dropRate: 2.8
                },
            ]
        },
        {
            id: 301,
            grade: Grade.GOLD,
            name: `Heart of the Foreign God`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/e/ec/Heart_of_a_foreign_god.png`,
            servantsURL: `assets/drop-servants/drop-gld-heart.PNG`,
            drops: [
                {
                    area: `Salem`,
                    quest: `Carter Residence`,
                    ap: 20,
                    apPerDrop: 162.7,
                    dropRate: 12.3
                },
                {
                    area: `Shinjuku`,
                    quest: `Shinjuku Gyoen`,
                    ap: 21,
                    apPerDrop: 175.0,
                    dropRate: 12.0
                },
                {
                    area: `Chaldea Gate (Fri)`,
                    quest: `FRI Caster Training Ground- Exp`,
                    ap: 40,
                    apPerDrop: 637.5,
                    dropRate: 6.3
                },
                {
                    area: `Chaldea Gate (Fri)`,
                    quest: `FRI Caster Training Ground- Adv`,
                    ap: 30,
                    apPerDrop: 784.3,
                    dropRate: 3.8
                }
            ]
        },
        {
            id: 302,
            grade: Grade.GOLD,
            name: `Dragon's Reverse Scale`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/c/c8/Dragons_reverse_scale.png`,
            servantsURL: `assets/drop-servants/drop-gld-scale.PNG`,
            drops: [
                {
                    area: `Babylonia`,
                    quest: `Nippur`,
                    ap: 21,
                    apPerDrop: 172.9,
                    dropRate: 12.1
                },
                {
                    area: `Chaldea Gate (Thu)`,
                    quest: `THU Rider Training Ground- Exp`,
                    ap: 40,
                    apPerDrop: 537.7,
                    dropRate: 7.4
                },
                {
                    area: `Chaldea Gate (Thu)`,
                    quest: `THU Rider Training Ground- Adv`,
                    ap: 30,
                    apPerDrop: 867.5,
                    dropRate: 3.5
                }
            ]
        },
        {
            id: 303,
            grade: Grade.GOLD,
            name: `Spirit Root`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/7/7b/Spiritroot.png`,
            servantsURL: `assets/drop-servants/drop-gld-root.PNG`,
            drops: [
                {
                    area: `Camelot`,
                    quest: `Holy City`,
                    ap: 20,
                    apPerDrop: 166.3,
                    dropRate: 12.0
                },
                {
                    area: `Shinjuku`,
                    quest: `Tower - Top Floor`,
                    ap: 21,
                    apPerDrop: 178.9,
                    dropRate: 11.7
                },
                {
                    area: `E Pluribus Unum`,
                    quest: `Washington`,
                    ap: 20,
                    apPerDrop: 242.5,
                    dropRate: 8.2
                },
                {
                    area: `Chaldea Gate (Sun)`,
                    quest: `SUN Saber Training Ground- Exp`,
                    ap: 40,
                    apPerDrop: 493.7,
                    dropRate: 8.1
                }
            ]
        },
        {
            id: 304,
            grade: Grade.GOLD,
            name: `Warhorse's Young Horn`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/b/b9/Horsehorn.png`,
            servantsURL: `assets/drop-servants/drop-gld-horn.PNG`,
            drops: [
                {
                    area: `Agartha`,
                    quest: `Camping Ground`,
                    ap: 20,
                    apPerDrop: 91.9,
                    dropRate: 21.8
                },
                {
                    area: `Anastasia`,
                    quest: `Rebel Stronghold`,
                    ap: 21,
                    apPerDrop: 95.3,
                    dropRate: 22.0
                },
                {
                    area: `Anastasia`,
                    quest: `Anchor Point`,
                    ap: 20,
                    apPerDrop: 98.1,
                    dropRate: 20.4
                },
                {
                    area: `Anastasia`,
                    quest: `Yaga Demensk`,
                    ap: 21,
                    apPerDrop: 105.2,
                    dropRate: 20.0
                },
                {
                    area: `Camelot`,
                    quest: `East Village`,
                    ap: 19,
                    apPerDrop: 111.6,
                    dropRate: 17.0
                },
                {
                    area: `E Pluribus Unum`,
                    quest: `Kearney`,
                    ap: 18,
                    apPerDrop: 143.6,
                    dropRate: 12.5
                },
                {
                    area: `Chaldea Gate (Tue)`,
                    quest: `TUE Lancer Training Ground- Exp`,
                    ap: 40,
                    apPerDrop: 309.9,
                    dropRate: 12.9
                },
            ]
        },
        {
            id: 305,
            grade: Grade.GOLD,
            name: `Tearstone of Blood`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/f/ff/Bloodtear.png`,
            servantsURL: `assets/drop-servants/drop-gld-tears.PNG`,
            drops: [
                {
                    area: `Shinjuku`,
                    quest: `Shinjuku 2-chome`,
                    ap: 21,
                    apPerDrop: 115.4,
                    dropRate: 18.2
                },
                {
                    area: `E Pluribus Unum`,
                    quest: `Alexandria`,
                    ap: 18,
                    apPerDrop: 148.6,
                    dropRate: 12.1
                },
                {
                    area: `Chaldea Gate (Mon)`,
                    quest: `MON Archer Training Ground- Exp`,
                    ap: 40,
                    apPerDrop: 314.6,
                    dropRate: 12.7
                },
            ]
        },
        {
            id: 306,
            grade: Grade.GOLD,
            name: `Black Beast Grease`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/4/49/Blacktallow.png`,
            servantsURL: `assets/drop-servants/drop-gld-tallow.PNG`,
            drops: [
                {
                    area: `Agartha`,
                    quest: `Northern Cliffs`,
                    ap: 21,
                    apPerDrop: 102.0,
                    dropRate: 20.6
                },
                {
                    area: `Babylonia`,
                    quest: `Northern Hill`,
                    ap: 20,
                    apPerDrop: 114.6,
                    dropRate: 17.4
                },
                {
                    area: `E Pluribus Unum`,
                    quest: `Lubbock`,
                    ap: 18,
                    apPerDrop: 146.3,
                    dropRate: 12.3
                },
                {
                    area: `Chaldea Gate (Sat)`,
                    quest: `SAT Assassin Training Ground- Exp`,
                    ap: 40,
                    apPerDrop: 333.0,
                    dropRate: 12.0
                },
            ]
        },
        {
            id: 307,
            grade: Grade.GOLD,
            name: `Lamp of Evil-Sealing`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/8/88/Lamp_of_Demon_Sealing.png`,
            servantsURL: `assets/drop-servants/drop-gld-lamp.PNG`,
            drops: [
                {
                    area: `Salem`,
                    quest: `Jail`,
                    ap: 21,
                    apPerDrop: 104.5,
                    dropRate: 20.1
                },
                {
                    area: `Camelot`,
                    quest: `Hidden Village`,
                    ap: 21,
                    apPerDrop: 130.3,
                    dropRate: 16.1
                },
                {
                    area: `Camelot`,
                    quest: `Dune of Dawn`,
                    ap: 21,
                    apPerDrop: 174.3,
                    dropRate: 10.9
                }
            ]
        },
        {
            id: 308,
            grade: Grade.GOLD,
            name: `Scarab of Wisdom`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/c/c2/Scarab_of_Wisdom.png`,
            servantsURL: `assets/drop-servants/drop-gld-scarab.PNG`,
            drops: [
                {
                    area: `Camelot`,
                    quest: `Great Temple`,
                    ap: 22,
                    apPerDrop: 182.1,
                    dropRate: 12.1
                },
                {
                    area: `Camelot`,
                    quest: `Sandstorm Desert`,
                    ap: 19,
                    apPerDrop: 234.6,
                    dropRate: 8.1
                }
            ]
        },
        {
            id: 309,
            grade: Grade.GOLD,
            name: `Primordial Lanugo`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/f/f6/Primordial_Lanugo.png`,
            servantsURL: `assets/drop-servants/drop-gld-lanugo.PNG`,
            drops: [
                {
                    area: `Babylonia`,
                    quest: `Blood Fort`,
                    ap: 21,
                    apPerDrop: 115.7,
                    dropRate: 18.2
                },
                {
                    area: `Götterdämmerung`,
                    quest: `67th Settlement`,
                    ap: 21,
                    apPerDrop: 116.7,
                    dropRate: 18.0
                },
                {
                    area: `Götterdämmerung`,
                    quest: `Pathway Towards The Peak`,
                    ap: 21,
                    apPerDrop: 116.9,
                    dropRate: 18.0
                },
                {
                    area: `Babylonia`,
                    quest: `Black Cedar Forest`,
                    ap: 20,
                    apPerDrop: 149.5,
                    dropRate: 13.4
                },
                {
                    area: `Götterdämmerung`,
                    quest: `Landing Point`,
                    ap: 20,
                    apPerDrop: 165.4,
                    dropRate: 12.1
                }
            ]
        },
        {
            id: 310,
            grade: Grade.GOLD,
            name: `Cursed Beast Gallstone`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/5/59/Cursed_Beast_Cholecyst.png`,
            servantsURL: `assets/drop-servants/drop-gld-cholecyst.PNG`,
            drops: [
                {
                    area: `Shimosa`,
                    quest: `Arakawa Field`,
                    ap: 21,
                    apPerDrop: 171.5,
                    dropRate: 12.2
                },
                {
                    area: `Babylonia`,
                    quest: `Mt. Ebih`,
                    ap: 21,
                    apPerDrop: 178.3,
                    dropRate: 11.8
                }
            ]
        },
        {
            id: 311,
            grade: Grade.GOLD,
            name: `Mysterious Divine Wine`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/a/a8/Bizarre_God_Wine.png`,
            servantsURL: `assets/drop-servants/drop-gld-wine.PNG`,
            drops: [
                {
                    area: `Agartha`,
                    quest: `Palace of Dragon King`,
                    ap: 21,
                    apPerDrop: 172.7,
                    dropRate: 12.2
                },
                {
                    area: `SIN`,
                    quest: `Icy Cave`,
                    ap: 20,
                    apPerDrop: 197.1,
                    dropRate: 10.1,
                },
                {
                    area: `Anastasia`,
                    quest: `Strath Stronghold`,
                    ap: 21,
                    apPerDrop: 207.1,
                    dropRate: 10.1
                },
                {
                    area: `Shimosa`,
                    quest: `Toke Castle`,
                    ap: 21,
                    apPerDrop: 222.0,
                    dropRate: 9.5
                }
            ]
        },
        {
            id: 312,
            grade: Grade.GOLD,
            name: `Dawnlight Reactor Core`,
            imgURL: `https://static.wikia.nocookie.net/fategrandorder/images/a/a0/DawnlightReactorCoreIcon.png`,
            servantsURL: `assets/drop-servants/drop-gld-core.PNG`,
            drops: [
                {
                    area: `SIN`,
                    quest: `Prison Camp`,
                    ap: 21,
                    apPerDrop: 103.7,
                    dropRate: 20.2,
                },
                {
                    area: `SIN`,
                    quest: `Shiquan Canyon`,
                    ap: 21,
                    apPerDrop: 105.0,
                    dropRate: 20.0
                },
            ]
        }
    ];
