export default function handler(req: { method: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { name: string; metodo: any; }): void; new(): any; }; }; }) {
  res.status(200).json({
     name: 'John Doe',
     metodo: req.method })
}
