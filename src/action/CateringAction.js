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
