/* import schedule from 'node-schedule'

routes.get('/job/create/:name', (req: Request, res: Response) => {
  const { name } = req.params
  const campaignId = name
  schedule.scheduleJob(campaignId, '* * * * * *', function () {
    console.log('running campaign: ' + campaignId)
  })
  res.send({ message: `job ${name} created` })
})

routes.get('/job/list', (req: Request, res: Response) => {
  console.log(Object.keys(schedule.scheduledJobs))
  res.send()
})

routes.get('/job/start/:name', (req: Request, res: Response) => {
  const { name } = req.params
  const campaignId = name
  const currentJob = schedule.scheduledJobs[campaignId]
  currentJob.invoke()
  res.send({ message: `job ${name} started` })
})

routes.get('/job/stop/:name', (req: Request, res: Response) => {
  const { name } = req.params
  const campaignId = name
  const currentJob = schedule.scheduledJobs[campaignId]
  currentJob.cancel()
  res.send({ message: `job ${name} stopped` })
}) */
