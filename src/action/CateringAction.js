import moment from "moment";
import "moment/locale/id";


export const getListDate = () => {
  return async (dispatch) => {
    try {
      let dateData = [
        {
          id: 0,
          dateName: "Senin",
          simpleDateName: "SEN",
          tanggal: "2021-03-8",
          status: "active",
        },
        {
          id: 1,
          dateName: "Selasa",
          simpleDateName: "SEL",
          tanggal: "2021-03-9",
          status: "active",
        },
        {
          id: 2,
          dateName: "Rabu",
          simpleDateName: "RAB",
          tanggal: "2021-03-10",
          status: "active",
        },
        {
          id: 3,
          dateName: "Kamis",
          simpleDateName: "KAM",
          tanggal: "2021-03-11",
          status: "active",
        },
        {
          id: 4,
          dateName: "Jumat",
          simpleDateName: "JUM",
          tanggal: "2021-03-12",
          status: "active",
        },
        {
          id: 5,
          dateName: "Sabtu",
          simpleDateName: "SAB",
          tanggal: "2021-03-13",
          status: "deactive",
        },
        {
          id: 6,
          dateName: "Minggu",
          simpleDateName: "MIN",
          tanggal: "2021-03-14",
          status: "deactive",
        },
        {
          id: 7,
          dateName: "Senin",
          simpleDateName: "SEN",
          tanggal: "2021-03-15",
          status: "active",
        },
        {
          id: 8,
          dateName: "Selasa",
          simpleDateName: "SEL",
          tanggal: "2021-03-16",
          status: "active",
        },
        {
          id: 9,
          dateName: "Rabu",
          simpleDateName: "RAB",
          tanggal: "2021-03-17",
          status: "active",
        },
        {
          id: 10,
          dateName: "Kamis",
          simpleDateName: "KAM",
          tanggal: "2021-03-18",
          status: "active",
        },
        {
          id: 11,
          dateName: "Jumat",
          simpleDateName: "JUM",
          tanggal: "2021-03-19",
          status: "active",
        },
        {
          id: 12,
          dateName: "Sabtu",
          simpleDateName: "SAB",
          tanggal: "2021-03-20",
          status: "deactive",
        },
        {
          id: 13,
          dateName: "Minggu",
          simpleDateName: "MIN",
          tanggal: "2021-03-21",
          status: "deactive",
        },
      ];

      dispatch({
        type: "GET_DATA_DATE",
        payload: dateData,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getDefaultData = () => {
  return async (dispatch) => {
    try {
      let tanggal = "2021-03-8";
      let typeFood = "Lunch";
      let simpleDateName = "SEN";

      let dataDefaultFood = [
        {
          id: 0,
          namaMakanan: "Nasi Goreng Sosis",
          ratingMakanan: 4,
          harga: 20000,
          penjual: "by Kulina - Uptown Lunch",
          gambar:
            "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
        },
        {
          id: 1,
          namaMakanan: "Soto Lamongan",
          ratingMakanan: 3.5,
          harga: 15000,
          penjual: "by Kulina - Uptown Lunch",
          gambar:
            "https://images.unsplash.com/photo-1572656631137-7935297eff55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          id: 2,
          namaMakanan: "Fusili with tomato sauce",
          ratingMakanan: 4.5,
          harga: 40000,
          penjual: "by Kulina - Uptown Lunch",
          gambar:
            "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80",
        },
      ];

      dispatch({
        type: "GET_DATA_CATERING",
        payload: dataDefaultFood,
      });

      dispatch({
        type: "GET_PICKED_TYPE_FOOD",
        payload: typeFood,
      });

      dispatch({
        type: "GET_PICKED_DATE",
        payload: tanggal,
      });

      dispatch({
        type: "GET_PICKED_DAY",
        payload: simpleDateName,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const chooseMenu = (typefood, tanggal) => {
  return async (dispatch) => {
    try {
      let datepicked = moment(tanggal).locale("id").format("dddd")
      console.log(typefood,datepicked)
      let data = [];

      if (typefood === "Lunch" && datepicked === "Senin") {
        data = [
          {
            id: 0,
            namaMakanan: "Nasi Goreng Sosis",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          },
          {
            id: 1,
            namaMakanan: "Soto Lamongan",
            ratingMakanan: 3.5,
            harga: 15000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1572656631137-7935297eff55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 2,
            namaMakanan: "Fusili with tomato sauce",
            ratingMakanan: 4.5,
            harga: 40000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80",
          },
        ];
      } else if (typefood === "Dinner" && datepicked === "Senin") {
        data = [
          {
            id: 0,
            namaMakanan: "Nasi Goreng Lemon",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Diner",
            gambar:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
          },
          {
            id: 1,
            namaMakanan: "Lamb Grill BBQ Sauce",
            ratingMakanan: 5,
            harga: 60000,
            penjual: "by Kulina - Uptown Diner",
            gambar:
              "https://images.unsplash.com/photo-1544025162-d76694265947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
          },
          {
            id: 2,
            namaMakanan: "Tuna with Lemon Sauce",
            ratingMakanan: 4.5,
            harga: 40000,
            penjual: "by Kulina - Uptown Diner",
            gambar:
              "https://images.unsplash.com/photo-1572862905000-c5b6244027a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
        ];
      } else if (typefood === "Lunch" && datepicked === "Selasa") {
        data = [
          {
            id: 0,
            namaMakanan: "Sate Ayam",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1603088549155-6ae9395b928f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 1,
            namaMakanan: "Tokyo Roll Salmon",
            ratingMakanan: 3.5,
            harga: 15000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 2,
            namaMakanan: "Kyushu Super Sushi",
            ratingMakanan: 4.5,
            harga: 150000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1553621042-f6e147245754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
          },
        ];
      } else if (typefood === "Dinner" && datepicked === "Selasa") {
        data = [
          {
            id: 0,
            namaMakanan: "Soyu Ramen",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
          },
          {
            id: 1,
            namaMakanan: "Curry Ramen",
            ratingMakanan: 5,
            harga: 15000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 2,
            namaMakanan: "Mini Bento",
            ratingMakanan: 4.5,
            harga: 40000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1535923210228-8ead72c0f712?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          },
        ];
      } else if (typefood === "Lunch" && datepicked === "Rabu") {
        data = [
          {
            id: 0,
            namaMakanan: "Blueberry and Toast",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 1,
            namaMakanan: "Royal Oatmeal",
            ratingMakanan: 3.5,
            harga: 15000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
          },
          {
            id: 2,
            namaMakanan: "Avocado and Egg Toast",
            ratingMakanan: 4.5,
            harga: 150000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80",
          },
        ];
      } else if (typefood === "Dinner" && datepicked === "Rabu") {
        data = [
          {
            id: 0,
            namaMakanan: "Rice and Lamosa",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1576488489579-6967c02c56fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 1,
            namaMakanan: "Chicken Hotplate",
            ratingMakanan: 5,
            harga: 15000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1546906067-0e3c85626d56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 2,
            namaMakanan: "Little Beijing Dimsum",
            ratingMakanan: 4.5,
            harga: 40000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1518983546435-91f8b87fe561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          },
        ];
      } else if (typefood === "Lunch" && datepicked === "Kamis") {
        data = [
          {
            id: 0,
            namaMakanan: "Shawarma with Curry Soup",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1567337710282-00832b415979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80",
          },
          {
            id: 1,
            namaMakanan: "Chicken Masala",
            ratingMakanan: 3.5,
            harga: 15000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=924&q=80",
          },
          {
            id: 2,
            namaMakanan: "Yellow Curry and Shrimp",
            ratingMakanan: 4.5,
            harga: 150000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
          },
        ];
      } else if (typefood === "Dinner" && datepicked === "Kamis") {
        data = [
          {
            id: 0,
            namaMakanan: "Turkey Kebab",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1595777216528-071e0127ccbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 1,
            namaMakanan: "Nachos Mexicana",
            ratingMakanan: 5,
            harga: 15000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1570461226513-e08b58a52c53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
          },
          {
            id: 2,
            namaMakanan: "Istanbul Lamb Grill",
            ratingMakanan: 4.5,
            harga: 40000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1582391123232-6130296f1fcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          },
        ];
      } else if (typefood === "Lunch" && datepicked === "Jumat") {
        data = [
          {
            id: 0,
            namaMakanan: "Super Supreme Pizza",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          },
          {
            id: 1,
            namaMakanan: "Siccily Pizza",
            ratingMakanan: 3.5,
            harga: 15000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 2,
            namaMakanan: "New York Pizza",
            ratingMakanan: 4.5,
            harga: 150000,
            penjual: "by Kulina - Uptown Lunch",
            gambar:
              "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          },
        ];
      } else if (typefood === "Dinner" && datepicked === "Jumat") {
        data = [
          {
            id: 0,
            namaMakanan: "Fusili Carbonara",
            ratingMakanan: 4,
            harga: 20000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 1,
            namaMakanan: "Vegetarian Tomato Pasta",
            ratingMakanan: 5,
            harga: 15000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
          },
          {
            id: 2,
            namaMakanan: "Black Pepper Spaghetti",
            ratingMakanan: 4.5,
            harga: 40000,
            penjual: "by Kulina - Uptown Dinner",
            gambar:
              "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80",
          },
        ];
      }

      dispatch({
        type: "GET_DATA_CATERING",
        payload: data,
      });

      dispatch({
        type: "GET_PICKED_TYPE_FOOD",
        payload: typefood,
      });

      dispatch({
        type: "GET_PICKED_DATE",
        payload: tanggal,
      });


    } catch (err) {
      console.log(err);
    }
  };
};

export const openModalLocation = () => {
  return async(dispatch) => {
    try{

      let openModal = "True"

      dispatch({
        type: "TRIGGER_MODAL_LOCATION",
        payload: openModal,
      });
    }
    catch(err){
      console.log(err)
    }
  }
}

export const closeModalLocation = () => {
  return async(dispatch) => {
    try{

      let closeModal = "False"

      dispatch({
        type: "TRIGGER_MODAL_LOCATION",
        payload: closeModal,
      });
    }
    catch(err){
      console.log(err)
    }
  }
}

export const openModalCart = () => {
  return async(dispatch) => {
    try{

      let openModal = "True"

      dispatch({
        type: "TRIGGER_MODAL_CART",
        payload: openModal,
      });
    }
    catch(err){
      console.log(err)
    }
  }
}

export const closeModalCart = () => {
  return async(dispatch) => {
    try{

      let closeModal = "False"

      dispatch({
        type: "TRIGGER_MODAL_CART",
        payload: closeModal,
      });
    }
    catch(err){
      console.log(err)
    }
  }
}
