const router = require("express").Router();
let Package = require("../../Models/svc-package.js");

//add package
router.route("/add").post((req, res) => {
  const pid = req.body.pid;
  const name = req.body.name;
  const description = req.body.description;
  const unitprice = req.body.unitprice;
  const catagory = req.body.catagory;

  const newPackage = new Package({
    pid,
    name,
    description,
    unitprice,
    catagory,
  });

  newPackage
    .save()
    .then(() => {
      res.json("Package Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//read package
router.route("/").get((req, res) => {
  Package.find()
    .then((packages) => {
      res.json(packages);
    })
    .catch((err) => {
      console.log(err);
    });
});
//update package

router.route("/update/:id").put(async (req, res) => {
  let packageId = req.params.id;
  const { pid, name, description, unitprice, catagory } = req.body;

  const updatePackage = {
    pid,
    name,
    description,
    unitprice,
    catagory,
  };

  const update = await Package.findByIdAndUpdate(packageId, updatePackage)
    .then(() => {
      res.status(200).send({ status: "Package Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
});

//delete package

router.route("/delete/:id").delete(async (req, res) => {
  let packageId = req.params.id;

  await Package.findByIdAndDelete(packageId)
    .then(() => {
      res.status(200).send({ status: "Package Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete package", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let packageId = req.params.id;
  await Package.findById(packageId)
    .then(() => {
      res.status(200).send({ status: "Package fetched", package: package });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get package", error: err.message });
    });
});

module.exports = router;
