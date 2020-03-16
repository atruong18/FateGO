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
                    apPerDrop: 20.2,
                    dropRate: 59.6
                },
                {
                    area: `Orleans`,
                    quest: `Marseille`,
                    ap: 7,
                    apPerDrop: 22.8,
                    dropRate: 30.6
                },
                {
                    area: `America`,
                    quest: `Dallas`,
                    ap: 17,
                    apPerDrop: 25.0,
                    dropRate: 67.9
                }
            ]
        },
        {
            id: 101,
            grade: Grade.BRONZE,
            name: `Unlucky Bone`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/c/ca/Unlucky_bone.png`,
            servantsURL: `assets/drop-servants/drop-bnz-bone.PNG`,
            drops: [
                {
                    area: `Fuyuki`,
                    quest: `X-C`,
                    ap: 4,
                    apPerDrop: 21.7,
                    dropRate: 18.4
                },
                {
                    area: `Fuyuki`,
                    quest: `X-G`,
                    ap: 15,
                    apPerDrop: 23.4,
                    dropRate: 64.1
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
                    area: `America`,
                    quest: `Deming`,
                    ap: 17,
                    apPerDrop: 27.1,
                    dropRate: 62.7
                },
                {
                    area: `Okeanos`,
                    quest: `Island of Wyverns`,
                    ap: 14,
                    apPerDrop: 27.8,
                    dropRate: 50.3
                },
                {
                    area: `Babylonia`,
                    quest: `Eridu`,
                    ap: 21,
                    apPerDrop: 32.0,
                    dropRate: 65.7
                }
            ]
        },
        {
            id: 103,
            grade: Grade.BRONZE,
            name: `Void Dust`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/4/43/Voids_refuse.png`,
            servantsURL: `assets/drop-servants/drop-bnz-dust.PNG`,
            drops: [
                {
                    area: `America`,
                    quest: `Charlotte`,
                    ap: 20,
                    apPerDrop: 31.4,
                    dropRate: 63.7
                },
                {
                    area: `Camelot`,
                    quest: `Remnants of Western Village`,
                    ap: 20,
                    apPerDrop: 42.5,
                    dropRate: 47.1
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
                    quest: `Wilderness of Death`,
                    ap: 19,
                    apPerDrop: 29.9,
                    dropRate: 63.5
                },
                {
                    area: `Camelot`,
                    quest: `Great Temple`,
                    ap: 22,
                    apPerDrop: 51.3,
                    dropRate: 42.9
                },
                {
                    area: `Salem`,
                    quest: `Suburb Mansion`,
                    ap: 21,
                    apPerDrop: 51.8,
                    dropRate: 40.5
                },
                {
                    area: `Salem`,
                    quest: `Quay`,
                    ap: 21,
                    apPerDrop: 52.6,
                    dropRate: 39.9
                }
            ]
        },
        {
            id: 105,
            grade: Grade.BRONZE,
            name: `Stinger of Certain Death`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/c/cc/Stinger_of_Certain_Death.png`,
            servantsURL: `assets/drop-servants/drop-bnz-stinger.png`,
            drops: [
                {
                    area: `Babylonia`,
                    quest: `Field of Reeds`,
                    ap: 21,
                    apPerDrop: 34.0,
                    dropRate: 61.7
                },
                {
                    area: `Babylonia`,
                    quest: `Plateau`,
                    ap: 20,
                    apPerDrop: 39.0,
                    dropRate: 51.3
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
                    quest: `Icicles Grotto`,
                    ap: 20,
                    apPerDrop: 49.5,
                    dropRate: 40.4
                }
            ]
        },
        {
            id: 106,
            grade: Grade.BRONZE,
            name: `Magical Cerebrospinal Fluid`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/b/bc/Magical_Cerebrospinal_Fluid_icon.png`,
            servantsURL: `assets/drop-servants/drop-bnz-fluid.PNG`,
            drops: [
                {
                    area: `Shinjuku`,
                    quest: `Shinjuku Station`,
                    ap: 21,
                    apPerDrop: 32.3,
                    dropRate: 65.0
                },
                {
                    area: `Shinjuku`,
                    quest: `Japan National Route 20`,
                    ap: 20,
                    apPerDrop: 50.0,
                    dropRate: 40.0
                },
                {
                    area: `Shinjuku`,
                    quest: `Yoyogi 2-chome`,
                    ap: 20,
                    apPerDrop: 50.3,
                    dropRate: 39.8
                }
            ]
        },
        {
            id: 107,
            grade: Grade.BRONZE,
            name: `Night-Weeping Iron Stake`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/3/35/Iron_Stake.png`,
            servantsURL: `assets/drop-servants/drop-bnz-stake.PNG`,
            drops: [
                {
                    area: `Salem`,
                    quest: `Gallow Hill`,
                    ap: 21,
                    apPerDrop: 30.6,
                    dropRate: 68.6
                },
                {
                    area: `Salem`,
                    quest: `Carter House`,
                    ap: 20,
                    apPerDrop: 49.9,
                    dropRate: 40.1
                },
                {
                    area: `Salem`,
                    quest: `Suburb Mansion`,
                    ap: 21,
                    apPerDrop: 51.5,
                    dropRate: 40.8
                },
                {
                    area: `Salem`,
                    quest: `Vacant House`,
                    ap: 21,
                    apPerDrop: 51.8,
                    dropRate: 40.5
                },
                {
                    area: `Salem`,
                    quest: `Meadows`,
                    ap: 21,
                    apPerDrop: 52.5,
                    dropRate: 40.0
                }
            ]
        },
        {
            id: 108,
            grade: Grade.BRONZE,
            name: `Stimulus Gunpowder`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/a/af/Stimulus_Gunpowder.png`,
            servantsURL: `assets/drop-servants/drop-bnz-gunpowder.PNG`,
            drops: [
                {
                    area: `Anastasia`,
                    quest: `Yaga Smolensk`,
                    ap: 20,
                    apPerDrop: 30.4,
                    dropRate: 65.8
                },
                {
                    area: `Anastasia`,
                    quest: `Yaga Sychyovka`,
                    ap: 21,
                    apPerDrop: 49.5,
                    dropRate: 42.4
                },
                {
                    area: `Anastasia`,
                    quest: `Rebellion Army's Stronghold`,
                    ap: 21,
                    apPerDrop: 50.0,
                    dropRate: 42.0
                },
                {
                    area: `Anastasia`,
                    quest: `Devastated Village`,
                    ap: 21,
                    apPerDrop: 51.7,
                    dropRate: 40.6
                },
                {
                    area: `Anastasia`,
                    quest: `Yaga Vyazma`,
                    ap: 21,
                    apPerDrop: 52.7,
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
                    quest: `Abolished Metropolis Babylon`,
                    ap: 20,
                    apPerDrop: 40.0,
                    dropRate: 50.0
                },
                {
                    area: `Salem`,
                    quest: `Quiet Forest`,
                    ap: 20,
                    apPerDrop: 42.4,
                    dropRate: 47.2
                },
                {
                    area: `Salem`,
                    quest: `Refuge`,
                    ap: 21,
                    apPerDrop: 47.4,
                    dropRate: 44.3
                },
                {
                    area: `Agartha`,
                    quest: `Riverside Town`,
                    ap: 20,
                    apPerDrop: 50.4,
                    dropRate: 39.7
                },
                {
                    area: `Okeanos`,
                    quest: `Bountiful Sea`,
                    ap: 18,
                    apPerDrop: 58.4,
                    dropRate: 30.8
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
                    quest: `Cuthah`,
                    ap: 21,
                    apPerDrop: 54.2,
                    dropRate: 38.8
                },
                {
                    area: `Camelot`,
                    quest: `Evening Bell Mausoleum`,
                    ap: 19,
                    apPerDrop: 57.8,
                    dropRate: 32.9
                },
                {
                    area: `Okeanos`,
                    quest: `Stormy Seas`,
                    ap: 15,
                    apPerDrop: 67.3,
                    dropRate: 22.3
                },
                {
                    area: `Shimosa`,
                    quest: `Paddy Fields`,
                    ap: 20,
                    apPerDrop: 77.6,
                    dropRate: 25.8
                }
            ]
        },
        {
            id: 202,
            grade: Grade.SILVER,
            name: `Octuplet Twin Crystals`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/8/84/Octuplet_twin_crystals.png`,
            servantsURL: `assets/drop-servants/drop-svr-crystal.PNG`,
            drops: [
                {
                    area: `Agartha`,
                    quest: `Peach Blossom Spring`,
                    ap: 21,
                    apPerDrop: 52.4,
                    dropRate: 40.1
                },
                {
                    area: `Camelot`,
                    quest: `Holy City Districts`,
                    ap: 20,
                    apPerDrop: 72.5,
                    dropRate: 27.6
                },
                {
                    area: `Okeanos`,
                    quest: `Two-Current Sea`,
                    ap: 14,
                    apPerDrop: 126.4,
                    dropRate: 11.1
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
                    quest: `Chasm on The Ground`,
                    ap: 21,
                    apPerDrop: 55.6,
                    dropRate: 37.7
                },
                {
                    area: `Babylonia`,
                    quest: `Marshland`,
                    ap: 21,
                    apPerDrop: 79.1,
                    dropRate: 26.5
                },
                {
                    area: `Okeanos`,
                    quest: `Sunken Rock Seas`,
                    ap: 17,
                    apPerDrop: 106.9,
                    dropRate: 15.9
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
                    apPerDrop: 59.3,
                    dropRate: 35.4
                },
                {
                    area: `Agartha`,
                    quest: `Subterranean Large River`,
                    ap: 21,
                    apPerDrop: 70.2,
                    dropRate: 29.9
                },
                {
                    area: `Agartha`,
                    quest: `Riverside Town`,
                    ap: 20,
                    apPerDrop: 94.7,
                    dropRate: 21.1
                },
                {
                    area: `Salem`,
                    quest: `Vacant House`,
                    ap: 21,
                    apPerDrop: 103,
                    dropRate: 20.4
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
                    apPerDrop: 46.0,
                    dropRate: 45.7
                },
                {
                    area: `America`,
                    quest: `Chicago`,
                    ap: 21,
                    apPerDrop: 51.4,
                    dropRate: 40.9
                },
                {
                    area: `London`,
                    quest: `Clerkenwell`,
                    ap: 18,
                    apPerDrop: 68.1,
                    dropRate: 26.4
                },
                {
                    area: `Camelot`,
                    quest: `Atlas Academy`,
                    ap: 20,
                    apPerDrop: 95.4,
                    dropRate: 21.0
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
                    apPerDrop: 68.5,
                    dropRate: 30.7
                },
                {
                    area: `London`,
                    quest: `Hyde Park`,
                    ap: 20,
                    apPerDrop: 72.8,
                    dropRate: 27.5
                },
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
                    quest: `Whateley House`,
                    ap: 21,
                    apPerDrop: 50.0,
                    dropRate: 42.0
                },
                {
                    area: `London`,
                    quest: `Southwark`,
                    ap: 19,
                    apPerDrop: 61.4,
                    dropRate: 31.0
                },
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
                    quest: `Vast Land of Nothingness`,
                    ap: 22,
                    apPerDrop: 50.1,
                    dropRate: 43.9
                },
                {
                    area: `Okeanos`,
                    quest: `Caldera Island`,
                    ap: 17,
                    apPerDrop: 131.5,
                    dropRate: 12.9
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
                    quest: `Sovereign Castle`,
                    ap: 21,
                    apPerDrop: 56.9,
                    dropRate: 36.9
                },
                {
                    area: `Camelot`,
                    quest: `Holy City Main Entrance`,
                    ap: 20,
                    apPerDrop: 61.0,
                    dropRate: 32.8
                },
                {
                    area: `Camelot`,
                    quest: `Round Table Fortress`,
                    ap: 19,
                    apPerDrop: 100.3,
                    dropRate: 18.9
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
                    apPerDrop: 50.5,
                    dropRate: 41.5
                },
                {
                    area: `Okeanos`,
                    quest: `Archipelago (Hidden Island)`,
                    ap: 16,
                    apPerDrop: 57.2,
                    dropRate: 28.0
                },
                {
                    area: `Anastasia`,
                    quest: `Icicles Grotto`,
                    ap: 20,
                    apPerDrop: 79.5,
                    dropRate: 25.2
                }
            ]
        },
        {
            id: 211,
            grade: Grade.SILVER,
            name: `Kotan Magatama`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/9/9c/Kotan_Magatama.png`,
            servantsURL: `assets/drop-servants/drop-svr-magatama.PNG`,
            drops: [
                {
                    area: `Shimosa`,
                    quest: `Castle Town`,
                    ap: 21,
                    apPerDrop: 51.8,
                    dropRate: 40.5
                },
                {
                    area: `Shimosa`,
                    quest: `Tokejou`,
                    ap: 21,
                    apPerDrop: 81.2,
                    dropRate: 25.9
                },
                {
                    area: `Shimosa`,
                    quest: `Hamlet`,
                    ap: 21,
                    apPerDrop: 82.3,
                    dropRate: 25.5
                }
            ]
        },
        {
            id: 212,
            grade: Grade.SILVER,
            name: `Permafrost Ice Crystal`,
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
                    quest: `Trampled Village`,
                    ap: 21,
                    apPerDrop: 82.4,
                    dropRate: 25.5
                },
                {
                    area: `Anastasia`,
                    quest: `Yaga Ryazan`,
                    ap: 21,
                    apPerDrop: 84.7,
                    dropRate: 24.8
                },
                {
                    area: `Anastasia`,
                    quest: `Yaga Demensk`,
                    ap: 21,
                    apPerDrop: 84.9,
                    dropRate: 24.7
                },
                {
                    area: `Anastasia`,
                    quest: `Foundation of a Giant Tree`,
                    ap: 21,
                    apPerDrop: 103.5,
                    dropRate: 20.3
                }
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
                    area: `America`,
                    quest: `Des Moines`,
                    ap: 18,
                    apPerDrop: 87.7,
                    dropRate: 20.5
                },
                {
                    area: `Agartha`,
                    quest: `Subterranean Moor`,
                    ap: 20,
                    apPerDrop: 95.9,
                    dropRate: 20.9
                },
                {
                    area: `Babylonia`,
                    quest: `Ur`,
                    ap: 21,
                    apPerDrop: 110.0,
                    dropRate: 19.1
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
                    quest: `Carter House`,
                    ap: 20,
                    apPerDrop: 162.2,
                    dropRate: 12.3
                },
                {
                    area: `Shinjuku`,
                    quest: `Shinjuku Imperial Garden`,
                    ap: 21,
                    apPerDrop: 171.3,
                    dropRate: 12.3
                },
                {
                    area: `Chaldea (Fri)`,
                    quest: `Caster 30AP`,
                    ap: 30,
                    apPerDrop: 500.0,
                    dropRate: 6.0
                },
                {
                    area: `Chaldea (Fri)`,
                    quest: `Caster 40AP`,
                    ap: 40,
                    apPerDrop: 517.7,
                    dropRate: 7.7
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
                    apPerDrop: 161.2,
                    dropRate: 13.0
                },
                {
                    area: `Chaldea (Thu)`,
                    quest: `Rider 40AP`,
                    ap: 40,
                    apPerDrop: 476.1,
                    dropRate: 8.4
                },
                {
                    area: `Chaldea (Thu)`,
                    quest: `Rider 30AP`,
                    ap: 30,
                    apPerDrop: 888.0,
                    dropRate: 3.4
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
                    quest: `Holy City Districts`,
                    ap: 20,
                    apPerDrop: 162.0,
                    dropRate: 12.3
                },
                {
                    area: `Shinjuku`,
                    quest: `Tower's Top Floor`,
                    ap: 21,
                    apPerDrop: 199.3,
                    dropRate: 10.5
                },
                {
                    area: `America`,
                    quest: `Washington`,
                    ap: 20,
                    apPerDrop: 281.7,
                    dropRate: 7.1
                }
            ]
        },
        {
            id: 304,
            grade: Grade.GOLD,
            name: `War Horse's Small Horn`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/b/b9/Horsehorn.png`,
            servantsURL: `assets/drop-servants/drop-gld-horn.PNG`,
            drops: [
                {
                    area: `Agartha`,
                    quest: `Campsite`,
                    ap: 20,
                    apPerDrop: 85.9,
                    dropRate: 23.3
                },
                {
                    area: `Anastasia`,
                    quest: `Rebellion Army's Stronghold`,
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
                    apPerDrop: 103.6,
                    dropRate: 20.3
                },
                {
                    area: `Camelot`,
                    quest: `Eastern Village`,
                    ap: 19,
                    apPerDrop: 110.5,
                    dropRate: 17.2
                },
                {
                    area: `America`,
                    quest: `Learney`,
                    ap: 18,
                    apPerDrop: 141.9,
                    dropRate: 12.7
                }
            ]
        },
        {
            id: 305,
            grade: Grade.GOLD,
            name: `Tear Stone of Blood`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/f/ff/Bloodtear.png`,
            servantsURL: `assets/drop-servants/drop-gld-tears.PNG`,
            drops: [
                {
                    area: `Shinjuku`,
                    quest: `Shinjuku 2-chome`,
                    ap: 21,
                    apPerDrop: 113.7,
                    dropRate: 18.5
                },
                {
                    area: `America`,
                    quest: `Alexandria`,
                    ap: 18,
                    apPerDrop: 176.0,
                    dropRate: 10.2
                }
            ]
        },
        {
            id: 306,
            grade: Grade.GOLD,
            name: `Black Tallow`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/4/49/Blacktallow.png`,
            servantsURL: `assets/drop-servants/drop-gld-tallow.PNG`,
            drops: [
                {
                    area: `Agartha`,
                    quest: `Northern Palisade`,
                    ap: 21,
                    apPerDrop: 103.2,
                    dropRate: 20.3
                },
                {
                    area: `Babylonia`,
                    quest: `Northern Hill`,
                    ap: 20,
                    apPerDrop: 110.9,
                    dropRate: 18.0
                },
                {
                    area: `America`,
                    quest: `Lubbock`,
                    ap: 18,
                    apPerDrop: 146.7,
                    dropRate: 12.3
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
                    apPerDrop: 108.7,
                    dropRate: 19.3
                },
                {
                    area: `Camelot`,
                    quest: `Concealed Village`,
                    ap: 21,
                    apPerDrop: 120.0,
                    dropRate: 17.5
                },
                {
                    area: `Camelot`,
                    quest: `Dunes of Daybreak`,
                    ap: 21,
                    apPerDrop: 165.1,
                    dropRate: 11.5
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
                    apPerDrop: 210.4,
                    dropRate: 10.5
                },
                {
                    area: `Camelot`,
                    quest: `Desert Sandstorm`,
                    ap: 19,
                    apPerDrop: 236.2,
                    dropRate: 8.0
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
                    quest: `Blood Fort Andromeda`,
                    ap: 21,
                    apPerDrop: 108.8,
                    dropRate: 19.3
                },
                {
                    area: `Babylonia`,
                    quest: `Northern Wall`,
                    ap: 21,
                    apPerDrop: 169.2,
                    dropRate: 12.4
                }
            ]
        },
        {
            id: 310,
            grade: Grade.GOLD,
            name: `Cursed Beast Cholecyst`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/5/59/Cursed_Beast_Cholecyst.png`,
            servantsURL: `assets/drop-servants/drop-gld-cholecyst.PNG`,
            drops: [
                {
                    area: `Shimosa`,
                    quest: `Arakawa Prairie`,
                    ap: 21,
                    apPerDrop: 162.5,
                    dropRate: 12.9
                },
                {
                    area: `Babylonia`,
                    quest: `Mount Ahvaz`,
                    ap: 21,
                    apPerDrop: 171.7,
                    dropRate: 12.2
                }
            ]
        },
        {
            id: 311,
            grade: Grade.GOLD,
            name: `Bizarre Godly Wine`,
            imgURL: `https://vignette.wikia.nocookie.net/fategrandorder/images/a/a8/Bizarre_God_Wine.png`,
            servantsURL: `assets/drop-servants/drop-gld-wine.PNG`,
            drops: [
                {
                    area: `Agartha`,
                    quest: `Palace of Dragon King`,
                    ap: 21,
                    apPerDrop: 160.8,
                    dropRate: 13.1
                },
                {
                    area: `Shimosa`,
                    quest: `Tokejou`,
                    ap: 21,
                    apPerDrop: 229.9,
                    dropRate: 9.1
                }
            ]
        }
    ];
