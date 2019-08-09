import * as path from 'path';

import { Session, Script, attach } from 'frida';

import { readFile } from 'src/util/readFile';

export class PayloadInjector {
  processName: string;
  session?: Session;
  script?: Script;

  get attached(): boolean {
    return this.session && !this.session.detached;
  }

  constructor(processName: string = 'ffxiv_dx11.exe') {
    this.processName = processName;
  }

  async attach() {
    if (this.session && !this.session.detached) {
      await this.detach();
      return;
    }

    const scriptPath = path.join(__dirname, 'payload.js');

    try {
      const script = await readFile(scriptPath);
      const session = await attach(this.processName);

      await this.injectPayload(session, script as string);

      this.session = session;
    } catch (e) {
      console.log('Injection error', e);
      throw e;
    }
  }

  async detach() {
    if (this.session) {
      await this.session.detach();
    }

    if (this.script) {
      await this.script.unload();
    }
  }

  async injectPayload(session: Session, payload: string) {
    const script = await session.createScript(payload);

    await script.eternalize();
    await script.load();

    this.script = script;
  }
}

export default new PayloadInjector();
