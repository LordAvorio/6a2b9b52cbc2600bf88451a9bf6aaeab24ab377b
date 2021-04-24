export const getListDate = () => {
  return async (dispatch) => {
    try {
      let dateData = [
        {
          id: 0,
          dateName: "Senin",
          simpleDateName: "SEN",
          tanggal: "2021-03-10",
          status: "active",
        },
        {
          id: 1,
          dateName: "Selasa",
          simpleDateName: "SEL",
          tanggal: "2021-03-11",
          status: "active",
        },
        {
          id: 2,
          dateName: "Rabu",
          simpleDateName: "RAB",
          tanggal: "2021-03-12",
          status: "active",
        },
        {
          id: 3,
          dateName: "Kamis",
          simpleDateName: "KAM",
          tanggal: "2021-03-13",
          status: "active",
        },
        {
          id: 4,
          dateName: "Jumat",
          simpleDateName: "JUM",
          tanggal: "2021-03-14",
          status: "active",
        },
        {
          id: 5,
          dateName: "Sabtu",
          simpleDateName: "SAB",
          tanggal: "2021-03-15",
          status: "deactive",
        },
        {
          id: 6,
          dateName: "Minggu",
          simpleDateName: "MIN",
          tanggal: "2021-03-16",
          status: "deactive",
        },
        {
          id: 7,
          dateName: "Senin",
          simpleDateName: "SEN",
          tanggal: "2021-03-17",
          status: "active",
        },
        {
          id: 8,
          dateName: "Selasa",
          simpleDateName: "SEL",
          tanggal: "2021-03-18",
          status: "active",
        },
        {
          id: 9,
          dateName: "Rabu",
          simpleDateName: "RAB",
          tanggal: "2021-03-19",
          status: "active",
        },
        {
          id: 10,
          dateName: "Kamis",
          simpleDateName: "KAM",
          tanggal: "2021-03-20",
          status: "active",
        },
        {
          id: 11,
          dateName: "Jumat",
          simpleDateName: "JUM",
          tanggal: "2021-03-21",
          status: "active",
        },
        {
          id: 12,
          dateName: "Sabtu",
          simpleDateName: "SAB",
          tanggal: "2021-03-22",
          status: "deactive",
        },
        {
          id: 13,
          dateName: "Minggu",
          simpleDateName: "MIN",
          tanggal: "2021-03-23",
          status: "deactive",
        },
      ];

      dispatch({
        type: 'GET_DATA_DATE',
        payload: dateData
      })


    } catch (err) {
      console.log(err);
    }
  };
};
