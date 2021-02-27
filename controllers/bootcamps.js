// Desc   Get all bootcamps
// Route  GET /api/v1/bootcamps
// Access Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'show all bootcamps',
  })
}

// Desc   Get single bootcamp
// Route  GET /api/v1/bootcamps/:id
// Access Public

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'show all bootcamps',
  })
}

// Desc   Create new bootcamp
// Route  POST /api/v1/bootcamps
// Access Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'create a bootcamps',
  })
}

// Desc   Update a bootcamp
// Route  PUT /api/v1/bootcamps/:id
// Access Private

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'create a bootcamps',
  })
}

// Desc   Delete a bootcamp
// Route  DELETE /api/v1/bootcamps/:id
// Access Private

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'create a bootcamps',
  })
}
