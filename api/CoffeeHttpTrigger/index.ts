import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));

    const email = (req.body && req.body.email);

    if (email) {
        context.res = {
            status: 200, /* Defaults to 200 */
            body:  { response: "New Email Saved: " + email } 
        };
    }
    else {
        context.res = {
            status: 400,
            body: { response: "Please provide an email" }
        };
    }
};

export default httpTrigger;
