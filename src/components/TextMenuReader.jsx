import React from "react";
import { BookReader } from "react-book-experience";
import "react-book-experience/styles.css";

export default function TextMenuReader() {
  const menuText = `
TETRA COFFEE: YOUR SECOND HOME

Welcome to TETRA Coffee. We dedicate ourselves to serving coffee that is not only strong but has a soothing balance of flavors.

--- THE BLEND ---

Terranova is our basic house-blend that we created to give our customer something classic, but modern coffee. A coffee that is not too strong but still have enough body to satisfy the mouth. A coffee that sweet but also balanced, hence we choose this particular coffee blend consisted of 70% Arabica Brazil with natural process and 30% Arabica Papandayan with wash process. 

Notes: Orange, Chocolate, Nutty.

--- SIGNATURE COFFEE ---

TERRANOVA COLD BREW (30k)
Smooth, low-acidity cold brew using our signature house blend. 150ml purely steeped house blend.

ES KOPI AT TERRA (24k)
Our signature es kopi made with magic milk, espresso, and brown sugar.

LATTE / CAPPUCINO (26k - 30k)
Espresso based with steamed milk. Tastes like chocolate wafers.

ES KOPI REGAL (28k)
No. 1 eskopi regal in Indonesia. Topped with famous regal biscuit.

ES KOPI BISCOFF (27k)
Magic milk, espresso magic, topped with famous biscuit lotus biscoff.

BARISTA FLIGHT (58k)
A tasting journey: Espresso, Hot Cappucino/Latte, and Filter Coffee.

ES KOPI RUM (28k)
Magic milk, magic espresso, and rum drops.

AMERICANO (24k - 26k)
Classic black coffee with our signature house blend.

--- MOCKTAILS ---

BLACK AND YELLOW (32k)
Espresso, lemon cuts, magic soda.

TROPICAL PARADISE (33k)
Mixed tropical fruit and overnight coldbrew.

LAVENDER PUNCH (33k)
Overnight coldbrew, lavender extract, lime, honey.

SUNSET BLUSH (35k)
Orange juice, lychee extract, coldbrew with aromatic cream rose.

HOMECOMING MOCKTAIL (32k)
Premium chocolate, cherry, brown spice topped with coconut protein cream.

FIREBALL (26k)
Black tea with tabasco drops, indonesian spice, and tropical fruit hint.

PINACOLADA (32k)
Coldbrew, coconut, pineapple, honey topped with cream coconut flakes.

--- MAIN COURSE ---

CRUSTED SALMON (95k)
Served with mixed greens, mashed potato and lemon butter sauce.

RIBS & MACARONI (80k)
Creamy Macaroni and BBQ Ribs.

JAPANESE OMURICE (45k)
Omelette rice with katsu and japanese curry.

SAIKORO RICE BOWL (48k)
Rice, Saikoro Beef Bbq Sauce and Scramble egg.

NASI IGA PENYET (61k)
Beef short ribs with chilli and steamed rice.

SOP BUNTUT SAGAN (60k)
Authentic indonesian oxtail soup served with steamed rice.

PARMIGIANA FETTUCINI (43k)
Fettucini pasta, buttered chicken with pomodoro sauce and mozarella.

WAGYU SIRLOIN (96k)
Australian Wagyu Sirloin (Marb 2-3) 140gr with mashed potato.

--- SNACKS & DESSERT ---

TERRA MIX PLATTER (35k)
Assorted fried items: onion rings, calamary, wonton, and potato wedges.

KOREAN SPICY WINGS (30k)
Korean Spicy chicken wings with cheese sauce.

CAESAR SALAD ROLL (48k)
Classic caesar salad rolled with tortilla sheet.

CILOK MENTAI (26k)
Traditional cilok with spicy peanut and mentai sauce.

TOMATO BRUCHETTA (28k)
French Baguette with salsa and Cheese.

VIETNAMESE ROLL (28k)
Lumpia Salad with sweet chilli sauce.

BANANA FRITTER (20k)
Fried Banana with Caramelized Brown Sugar.

MOLTEN LAVA CAKE (48k)
Lava cake serve with strawberry jam, granola crumb & ice cream.
  `;

  return (
    <div className="w-full max-w-4xl mx-auto h-[70vh] min-h-[500px] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative">
      <BookReader
        id="tetra-menu-book"
        text={menuText}
        title="TETRA COFFEE"
        author="Curated Menu"
      />
    </div>
  );
}
