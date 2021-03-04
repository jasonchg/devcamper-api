const Bootcamp = require('../models/Bootcamp.js')
const ErrorResponse = require('../utils/errorResponse')

// Desc   Get all bootcamps
// Route  GET /api/v1/bootcamps
// Access Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find()

    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    })
  } catch (error) {
    next(error)
  }
}

// Desc   Get single bootcamp
// Route  GET /api/v1/bootcamps/:id
// Access Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      )
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    })
  } catch (error) {
    next(error)
  }
}

// Desc   Create new bootcamp
// Route  POST /api/v1/bootcamps
// Access Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)

    res.status(200).json({
      success: true,
      data: bootcamp,
    })
  } catch (error) {
    next(error)
  }
}

// Desc   Update a bootcamp
// Route  PUT /api/v1/bootcamps/:id
// Access Private

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      )
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    })
  } catch (error) {
    next(error)
  }
}

// Desc   Delete a bootcamp
// Route  DELETE /api/v1/bootcamps/:id
// Access Private

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      )
    }

    res.status(200).json({
      success: true,
      data: {},
    })
  } catch (error) {
    next(error)
  }
}
