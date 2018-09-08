const AuditService = require('./service/AuditService');
const ResultService = require('./service/ResultService');

class Controller
{
    constructor()
    {
        this.resultService = new ResultService();
    }

    async start()
    {
        try {
            const result = await AuditService.performAudits();
            const mappedResult = this.resultService.mapResult(result);
            const bla = 1;
            process.exit();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new Controller();
