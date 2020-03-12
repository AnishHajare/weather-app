const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +  '.json?access_token=pk.eyJ1IjoiYW5pc2hoYWphcmUiLCJhIjoiY2s3MnV5Mm9hMDV1NTNldDAwbGRibTZxbSJ9.ph61_s13B35HclzARr5b2w&limit=1'

    request({ url: url, json:true }, (error,{body}) => {
        if (error) {
            callback('Unable to connect to weather services',undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find loction. Try another search!')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode