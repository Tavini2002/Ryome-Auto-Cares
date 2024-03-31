const router = require("express").Router();
const booking = require("../../Models/booking");
let supplier = require("../../Models/supplier");

// CRUD (create page) code segment

router.route("/bookNow").post((req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const address = req.body.address;
  const phoneNum = req.body.phoneNum;
  const eMail = req.body.eMail;
  const vNum = req.body.vNum;
  const vType = req.body.vType;
  const dDate = req.body.dDate;
  const serviceBox = req.body.serviceBox;

  const newBooking = new booking({
    fname,
    lname,
    address,
    phoneNum,
    eMail,
    vNum,
    vType,
    dDate,
    serviceBox,
  });

  newBooking
    .save()
    .then(() => {
      res.json("Booking Successfull");
    })
    .catch((err) => {
      console.log(err);
    });
});

// CRUD (all data retreve page) code segment
router.route("/").get((req, res) => {
  booking
    .find()
    .then((booking) => {
      res.json(booking);
    })
    .catch((err) => {
      console.log(err);
    });
});

//////
//CRUD (update page) code segment
/*router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id; //code for get the individual id from the url
  const { name, contact, address, country } = req.body;

  //object for supplier update
  const updateSupplier = {
    name,
    contact,
    address,
    country,
  };
  const update = await supplier
    .findByIdAndUpdate(userId, updateSupplier)
    .then(() => {
      res.status(200).send({ status: "user updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ staus: "supplier added can't be done" });
    });
});
//CRUD (delete page) code segment

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;
  await supplier
    .findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "supplier can't be deletes", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await supplier
    .findById(userId)
    .then((supplier) => {
      res.status(200).send({ status: "user fetched", supplier });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Can't find user", error: err.message });
    });
}); */

module.exports = router;
