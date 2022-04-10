export async function get() {
    let response = await fetch('https://Server.hipeople21.repl.co');


    return {
        status: response.status,
        body: {
            projects: response.ok && (await response.json())
        }
    };
}