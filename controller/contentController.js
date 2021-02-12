class contentController{

    //just for demo user only content
    getcontent = async(req, res) => {
        res.status(200).json({
            title: 'Demo',
            content: `Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.`
        })
    }
}

module.exports = contentController