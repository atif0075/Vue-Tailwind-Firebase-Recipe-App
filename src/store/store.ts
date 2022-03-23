import { createStore } from "vuex";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
export const store = createStore({
  state: {
    error: false,
    imgReady: false,
    img: '',
    recipes: [
      {
        slug: "fettuccine",
        title: "Fettuccine",
        description:
          "Tonkatsu (fried pork cutlets) is one of the most popular dishes in Japan. It's commonly served with a bottled sauce ",
        method: `<ul><li class="ql-align-justify"><strong>For the sauce</strong>:</li></ul><p class="ql-align-justify">Stir together the ketchup, soy sauce, Worcestershire sauce, mirin, sugar, Dijon and garlic powder in a small bowl. Set aside while you prepare the pork.</p><ul><li class="ql-align-justify"><strong>For the pork: </strong></li></ul><p class="ql-align-justify">Put the flour in a shallow bowl. Whisk the egg with a small splash of water in a second shallow bowl. Add the panko to a deep dish. Lightly pound each piece of pork with a meat mallet, then generously sprinkle on both sides with salt and pepper. Dredge one cutlet in the flour, coating completely, then shake off any excess. Dip it in the egg mixture, letting any excess drip off, then coat with the panko, gently pressing it into the panko so the crumbs stick. Transfer to a plate and repeat with the remaining cutlets. Heat about 1/3 inch oil in a medium skillet over medium heat until it shimmers. Add 2 of the cutlets and cook until golden brown on the bottom, about 3 minutes. Flip the pieces over and cook until almost cooked through but still pink, 1 to 2 minutes more. Transfer the cutlets to a paper towel–lined cutting board, sprinkle with salt and tent with foil to keep warm. Repeat with the 2 remaining cutlets.</p><ul><li class="ql-align-justify"><strong>For serving:</strong></li></ul><p class="ql-align-justify">Slice the cutlets crosswise into 1/2-inch strips. Place a sliced cutlet on each plate along with a scoop of rice, a mound of cabbage and 2 tomato wedges and/or cucumber slices, if using. Drizzle the cutlets with the sauce and serve with extra sauce on the side.</p><p class="ql-align-justify">Praesent ornare interdum gravida. Donec efficitur leo suscipit aliquet pellentesque. In quis purus et dui mollis vulputate. Aenean non faucibus felis. Phasellus non aliquet est, non dictum sem. In hac habitasse platea dictumst. Integer vehicula elit ac libero egestas ornare non sed dolor. Integer vulputate id est nec pulvinar. Cras nec sollicitudin lacus, quis sagittis diam. Donec porta libero ac lorem semper, eget porttitor quam fermentum. Ut tincidunt feugiat sem, nec aliquam mi tincidunt non.</p><p class="ql-align-justify"><span style="color: rgb(255, 255, 255); background-color: rgb(230, 0, 0);">For the sauce:</span></p><p class="ql-align-justify">Stir together the ketchup, soy sauce, <u>Worcestershire sauce, mirin</u>, sugar, Dijon and garlic powder in a small bowl. Set aside while you prepare the pork</p><p class="ql-align-justify"><span style="background-color: rgb(230, 0, 0); color: rgb(255, 255, 255); ">For the pork:</span></p><p class="ql-align-justify"><em>Put the flour in a shallow bowl. Whisk the egg with a small splash of water in a second shallow bowl. Add the panko to a deep dish. Lightly pound each piece of pork with a meat mallet, then generously sprinkle on both sides with salt and pepper. Dredge one cutlet in the flour, coating completely, then shake off any excess. Dip it in the egg mixture, letting any excess drip off, then coat with the panko, gently pressing it into the panko so the crumbs stick. Transfer to a plate and repeat with the remaining cutlets. Heat about 1/3 inch oil in a medium skillet over medium heat until it shimmers. Add 2 of the cutlets and cook until golden brown on the bottom, about 3 minutes. Flip the pieces over and cook until almost cooked through but still pink, 1 to 2 minutes more. </em></p><blockquote class="ql-align-justify">Transfer the cutlets to a paper towel–lined cutting board, sprinkle with salt and tent with foil to keep warm. Repeat with the 2 remaining cutlets.For serving: Slice the cutlets crosswise into 1/2-inch strips. Place a sliced cutlet on each plate along with a scoop of rice, a mound of cabbage and 2 tomato wedges and/or cucumber slices, if using. Drizzle the cutlets with the sauce and serve with extra sauce on the side.</blockquote><p><br></p>`,
        bg: "https://source.unsplash.com/random/400x400",
        date: "1-Mar-2022",
        by: "M Atif",

      },

    ],
  },

  actions: {},

  mutations: {},
});
const fetchData = async () => {
  const Data = collection(db, "Recipe");
  try {
    
    const querySnapshot = await getDocs(Data);
    querySnapshot.forEach((doc) => {

      let obj: any = {};
      obj["slug"] = doc.data().slug;
      obj["title"] = doc.data().title;
      obj["description"] = doc.data().description;
      obj["method"] = doc.data().method;
      obj["bg"] = doc.data().bg;
      obj["date"] = doc.data().date;
      obj["by"] = doc.data().by;
      store.state.recipes.push(obj);

    });
  } catch (e) {
    console.log(e);
  }
};
fetchData();
